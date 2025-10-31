import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';


const Therapist = sequelize.define('Therapist', {
userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'Users',
        key: 'id'
    }
},
  name: {
    type: DataTypes.STRING,
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
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    constraints: {
        is: /^[0-9+\-() ]+$/i,
        notEmpty: true
    }
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
    values: ['Anxiety', 'Depression', 'Stress Management', 'Relationship Issues', 'Trauma', 'Self-Esteem', 'Grief Counseling', 'Career Counseling', 'Family Therapy', 'Addiction'],
  },
  isApproved:{
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

export default Therapist;
