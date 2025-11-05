// controllers/therapistController.js
import Therapist from '../models/therapist.js';
import User from '../models/user.js';
import { Op } from 'sequelize'; 


export const applyAsTherapist = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Unauthorized user' });
    }

    const { name, bio, NGO, phone, specialization } = req.body;

    // Quick validation (your express-validator also catches this)
    if (!name || !phone || !specialization) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone, and specialization are required.',
      });
    }

    //  Prevent duplicate applications by the same user
    const existingTherapist = await Therapist.findOne({
      where: { userId: req.user.id },
    });

    if (existingTherapist) {
      return res.status(400).json({
        success: false,
        message: 'You have already applied as a therapist.',
      });
    }

    // Check for duplicate phone or email (fix: use imported Op)
    const duplicateCheck = await Therapist.findOne({
      where: {
        [Op.or]: [{ email: req.user.email }, { phone }],
      },
    });

    if (duplicateCheck) {
      return res.status(400).json({
        success: false,
        message: 'A therapist with this email or phone already exists.',
      });
    }

    // Create new therapist entry
    const therapist = await Therapist.create({
      userId: req.user.id,
      name,
      bio,
      NGO,
      email: req.user.email,
      phone,
      specialization,
      isApproved: false, // default
    });

    return res.status(201).json({
      success: true,
      message: 'Therapist application submitted successfully.',
      data: therapist,
    });
  } catch (error) {
    console.error('Error applying as therapist:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
};


export const getAllTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.findAll({
      where: { isApproved: true },
      attributes: { exclude: ['userId'] },
      include: [
        {
          model: User,
          attributes: ['id', 'username', 'email'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.status(200).json({
      success: true,
      count: therapists.length,
      data: therapists,
    });
  } catch (error) {
    console.error('Error fetching therapists:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
};


export const getTherapistById = async (req, res) => {
  try {
    const therapist = await Therapist.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username', 'email'] }],
    });

    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: 'Therapist not found',
      });
    }

    res.status(200).json({
      success: true,
      data: therapist,
    });
  } catch (error) {
    console.error('Error fetching therapist:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
};


export const updateTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findByPk(req.params.id);
    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: 'Therapist not found',
      });
    }

    if (req.user.role !== 'admin' && req.user.id !== therapist.userId) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this profile.',
      });
    }

    await therapist.update(req.body);

    res.status(200).json({
      success: true,
      message: 'Therapist profile updated successfully.',
      data: therapist,
    });
  } catch (error) {
    console.error('Error updating therapist:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
};


export const approveTherapist = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Only admins can approve therapists.',
      });
    }

    const therapist = await Therapist.findByPk(req.params.id);
    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: 'Therapist not found',
      });
    }

    therapist.isApproved = true;
    await therapist.save();

    res.status(200).json({
      success: true,
      message: 'Therapist approved successfully.',
    });
  } catch (error) {
    console.error('Error approving therapist:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
};


export const removeTherapist = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Only admins can delete therapists.',
      });
    }

    const therapist = await Therapist.findByPk(req.params.id);
    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: 'Therapist not found',
      });
    }

    await therapist.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting therapist:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
};
