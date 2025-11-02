import { DataTypes } from 'sequelize';
import {sequelize} from '../config/db.js';
import User from './user.js';

const MoodEntry = sequelize.define('MoodEntry', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'Users', key: 'id' },
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  mood: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, { timestamps: false });

MoodEntry.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(MoodEntry, { foreignKey: 'userId' });

export default MoodEntry;
