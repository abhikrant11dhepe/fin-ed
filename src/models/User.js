import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email for this user.'],
    maxlength: [50, 'Email cannot be more than 50 characters'],
  },
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
