import{ Request, Response } from 'express';
import { Therapist } from '../models/therapist.js';


export const applyAsTherapist = async(req, res) => {
    try{

        const { name, bio, NGO, email, phone, specialization } = req.body;

        if(!name || !email || !phone || !specialization){
            return res.status(400).json({ message: 'Name, email, phone, and specialization are required.' });
        }

        const newTherapist = await Therapist.create({
            name,
            bio,
            NGO,
            email,
            phone,
            specialization
        });
        
        res.status(201).json(newTherapist);
    } catch (error) {
        console.error('Error creating therapist:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getAllTherapists = async(req, res) => {
    try {
        const therapists = await Therapist.findAll();
        res.status(200).json(therapists);
    } catch (error) {
        console.error('Error fetching therapists:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const getTherapistById = async(req, res) => {
    try {
        const { id } = req.params;  
        const therapist = await Therapist.findByPk(id);
        if (!therapist) {
            return res.status(404).json({ message: 'Therapist not found' });
        }
        res.status(200).json(therapist);
    } catch (error) {
        console.error('Error fetching therapist by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateTherapist = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, bio, NGO, email, phone, specialization, isApproved } = req.body;  

        const therapist = await Therapist.findByPk(id);
        if (!therapist) {
            return res.status(404).json({ message: 'Therapist not found' });
        }
        await therapist.update({
            name,
            bio,
            NGO,
            email,
            phone,
            specialization,
            isApproved
        });
        res.status(200).json(therapist);
    } catch (error) {
        console.error('Error updating therapist:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const removeTherapist = async(req, res) => {
    try {

        const {id } = req.params;
        const therapist = await Therapist.findByPk(id);

        if (!therapist) {
            return res.status(404).json({ message: 'Therapist not found' });
        }

        await therapist.destroy();  
        res.status(204).json({ message: 'Therapist deleted successfully' });

    } catch (error) {

        console.error('Error deleting therapist:', error);
        res.status(500).json({ message: 'Internal server error' });

    }
}

export const approveTherapist = async(req, res) => {
    try {
        const { id } = req.params;
        const therapist = await Therapist.findByPk(id);

        if (!therapist) {
            return res.status(404).json({ message: 'Therapist not found' });
        }   
        therapist.isApproved = true;
        await therapist.save();
        res.status(200).json({ message: 'Therapist approved successfully' });
    } catch (error) {
        console.error('Error approving therapist:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
