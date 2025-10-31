import Therapist from '../models/therapist.js';
import User from '../models/User.js';


export const applyAsTherapist = async (req, res) => {
  try {
    const { name, bio, NGO, phone, specialization } = req.body;

    if (!name || !phone || !specialization) {
      return res.status(400).json({ success: false, message: 'Name, phone, and specialization are required.' });
    }

    const existing = await Therapist.findOne({ where: { userId: req.user.id } });
    if (existing) {
      return res.status(400).json({ success: false, message: 'You have already applied as a therapist.' });
    }

    const newTherapist = await Therapist.create({
      userId: req.user.id,
      name,
      bio,
      NGO,
      email: req.user.email,
      phone,
      specialization,
    });

    res.status(201).json({ success: true, data: newTherapist });
  } catch (error) {
    console.error('Error applying as therapist:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


export const getAllTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.findAll({
      where: { isApproved: true },
      attributes: { exclude: ['userId'] },
      include: [{ model: User, attributes: ['username', 'email'] }],
    });

    res.status(200).json({ success: true, data: therapists });
  } catch (error) {
    console.error('Error fetching therapists:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


export const getTherapistById = async (req, res) => {
  try {
    const therapist = await Therapist.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username', 'email'] }],
    });

    if (!therapist) {
      return res.status(404).json({ success: false, message: 'Therapist not found' });
    }

    res.status(200).json({ success: true, data: therapist });
  } catch (error) {
    console.error('Error fetching therapist:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const updateTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findByPk(req.params.id);
    if (!therapist) {
      return res.status(404).json({ success: false, message: 'Therapist not found' });
    }

    if (req.user.role !== 'admin' && req.user.id !== therapist.userId) {
      return res.status(403).json({ success: false, message: 'Not authorized to update this profile.' });
    }

    await therapist.update(req.body);
    res.status(200).json({ success: true, data: therapist });
  } catch (error) {
    console.error('Error updating therapist:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const approveTherapist = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Only admins can approve therapists.' });
    }

    const therapist = await Therapist.findByPk(req.params.id);
    if (!therapist) {
      return res.status(404).json({ success: false, message: 'Therapist not found' });
    }

    therapist.isApproved = true;
    await therapist.save();

    res.status(200).json({ success: true, message: 'Therapist approved successfully' });
  } catch (error) {
    console.error('Error approving therapist:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const removeTherapist = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Only admins can delete therapists.' });
    }

    const therapist = await Therapist.findByPk(req.params.id);
    if (!therapist) {
      return res.status(404).json({ success: false, message: 'Therapist not found' });
    }

    await therapist.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting therapist:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
