
import User from '../models/user.js';
import Therapist from '../models/Therapist.js';

export const getAdminDashboard = async (req, res, next) => {
  try {
    // Only admins can access this
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Only admins can view the dashboard.' });
    }

    // Count total users
    const userCount = await User.count();

    // Count total approved therapists
    const therapistCount = await Therapist.count({ where: { isApproved: true } });

    // Count pending therapist applications
    const pendingTherapistCount = await Therapist.count({ where: { isApproved: false } });

    // Get 5 most recent users
    const recentUsers = await User.findAll({
      order: [['createdAt', 'DESC']],
      limit: 5,
      attributes: ['id', 'username', 'email', 'role', 'createdAt']
    });

    // Get 5 most recent therapist applications
    const recentTherapists = await Therapist.findAll({
      order: [['createdAt', 'DESC']],
      limit: 5,
      include: [{ model: User, attributes: ['id', 'username', 'email'] }],
      attributes: ['id', 'isApproved', 'bio', 'specialization', 'createdAt']
    });

    res.status(200).json({
      message: 'Admin dashboard data fetched.',
      data: {
        userCount,
        therapistCount,
        pendingTherapistCount,
        recentUsers,
        recentTherapists
      }
    });
  } catch (error) {
    next(error);
  }
};