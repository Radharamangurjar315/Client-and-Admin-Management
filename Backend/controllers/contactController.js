const Contact = require('../models/contact');

// Get all contact submissions
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new contact submission
exports.createContact = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, city } = req.body;

    // Check all fields provided
    if (!fullName || !email || !mobileNumber || !city) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    const contact = await Contact.create({
      fullName,
      email,
      mobileNumber,
      city
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact
    });
  } catch (error) {
    // Catch mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages[0]
      });
    }

    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
