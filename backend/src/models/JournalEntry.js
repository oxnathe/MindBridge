import { DataTypes } from 'sequelize';
import {sequelize} from '../config/db.js';

const JournalEntry = sequelize.define('JournalEntry', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
 emotionTags: {
    type: DataTypes.JSON, 
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default JournalEntry;
