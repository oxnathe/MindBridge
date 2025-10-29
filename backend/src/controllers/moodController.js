import MoodEntry from '../models/moodEntry.js';
import { validationResult } from 'express-validator';

export const addMood = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.user.id;
    const { mood, note } = req.body;
    const date = new Date().toISOString().slice(0, 10);

    const moodEntry = await MoodEntry.create({ userId, date, mood, note });

    res.status(201).json({
      message: 'Mood entry added successfully',
      moodEntry,
    });
  } catch (error) {
    next(error);
  }
};

export const getMoods = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const moods = await MoodEntry.findAll({
      where: { userId },
      order: [['date', 'DESC']],
    });

    res.status(200).json({
      message: 'Mood history fetched successfully',
      moods,
    });
  } catch (error) {
    next(error);
  }
};
