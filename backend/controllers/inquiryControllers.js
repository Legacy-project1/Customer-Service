

const Inquiry = require("../models/inquirySchema");

// Create inquiry from user
const userInquiry = async (req, res) => {
  try {
    await Inquiry.create(req.body);
    res.send({ msg: "Inquiry sent successfully" });
  } catch (error) {
    res.status(500).send({ error: "Failed to create inquiry" });
  }
};

// Get all inquiries for the admin
const getInquiry = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.send(inquiries);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch inquiries" });
  }
};



module.exports = {
  userInquiry,
  getInquiry,
 
};