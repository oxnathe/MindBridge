import { DataTypes } from 'sequelize';
import {sequelize} from '../config/db.js';
import User from './User.js';

const Therapist = sequelize.define('Therapist', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  NGO: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[0-9+\-() ]+$/i,
      notEmpty: true,
    },
  },
  specialization: {
    type: DataTypes.ENUM(
      'Anxiety',
      'Depression',
      'Stress Management',
      'Relationship Issues',
      'Trauma',
      'Self-Esteem',
      'Grief Counseling',
      'Career Counseling',
      'Family Therapy',
      'Addiction'
    ),
    allowNull: false,
  },
  isApproved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Therapist.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Therapist, { foreignKey: 'userId' });

export default Therapist;
