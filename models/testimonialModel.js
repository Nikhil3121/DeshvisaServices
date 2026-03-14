import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  // Client Info
  clientName: {
    type: String,
    required: [true, 'Please provide client name']
  },
  clientEmail: {
    type: String,
    required: [true, 'Please provide client email']
  },
  clientCompany: String,
  clientImage: String,
  clientRole: String,

  // Testimonial Content
  quote: {
    type: String,
    required: [true, 'Please provide testimonial quote']
  },
  rating: {
    type: Number,
    required: [true, 'Please provide rating'],
    min: 1,
    max: 5
  },
  serviceUsed: String,
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  },

  // Additional Info
  result: String,
  projectDuration: String,

  // Status
  isApproved: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },

  // Admin
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Indexes
testimonialSchema.index({ isApproved: 1, isActive: 1 });
testimonialSchema.index({ rating: -1 });
testimonialSchema.index({ createdAt: -1 });

export default mongoose.model('Testimonial', testimonialSchema);

