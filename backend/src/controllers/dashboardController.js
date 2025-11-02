// controllers/dashboardController.js
import MoodEntry from '../models/moodEntry.js';
import { Op } from 'sequelize';

// Get weekly mood history for the logged-in user
export const getWeeklyMood = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Get today's date and 6 days ago (for a 7-day week)
    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 6);

    // Find all mood entries for this user in the last 7 days
    const moods = await MoodEntry.findAll({
      where: {
        userId,
        date: {
          [Op.between]: [weekAgo.toISOString().slice(0, 10), today.toISOString().slice(0, 10)]
        }
      },
      order: [['date', 'ASC']]
    });

    // Group by date and calculate average mood per day
    const moodByDay = {};
    moods.forEach(entry => {
      if (!moodByDay[entry.date]) moodByDay[entry.date] = [];
      moodByDay[entry.date].push(entry.mood);
    });

    // Prepare result: [{ date: 'YYYY-MM-DD', averageMood: 4 }]
    const result = Object.keys(moodByDay).map(date => ({
      date,
      averageMood: (
        moodByDay[date].reduce((sum, m) => sum + m, 0) / moodByDay[date].length
      ).toFixed(2)
    }));

    res.status(200).json({
      message: 'Weekly mood history fetched.',
      data: result
    });
  } catch (error) {
    next(error);
  }
};