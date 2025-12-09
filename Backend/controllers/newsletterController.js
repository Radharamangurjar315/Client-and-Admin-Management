const Newsletter = require('../models/newsletter');

// Get all newsletter subscribers
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    res.json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Subscribe to newsletter
exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }

    const subscriber = await Newsletter.create({
      email
    });

    res.status(201).json({
      success: true,
      message: 'Subscribed to newsletter successfully',
      data: subscriber
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'This email is already subscribed'
      });
    }
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
