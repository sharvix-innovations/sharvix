/* global process */
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'https://sharvixinnovations.com',
    'https://www.sharvixinnovations.com'
  ],
  methods: ['GET', 'POST'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, subject, message, services } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required fields' 
    });
  }

  try {
    const servicesText = services && services.length > 0 
      ? services.join(', ') 
      : 'Not specified';

    // Email content (user-friendly)
    const userEmailContent = `
      <h2>Hello ${name},</h2>
      <p>Thank you for reaching out to <strong>Sharvix Innovations</strong>!</p>
      <p>We have successfully received your message with the following details:</p>
      <ul>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        <li><strong>Services Interested:</strong> ${servicesText}</li>
      </ul>
      <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong>.</p>
      <p>If you have any urgent matters, feel free to call us at: <strong>+91-88053-36644</strong></p>
      <br/>
      <p>Best regards,<br/>
      <strong>The Sharvix Innovations Team</strong><br/>
      Email: sharvixinnovations@gmail.com<br/>
      Vinayak Apartments, Prabhat Road, Lane No. 11, Erandwane, Pune, Maharashtra 411004</p>
    `;

    // Email content (admin - detailed)
    const adminEmailContent = `
      <h2 style="color: #0597F2;">New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Subject:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${subject}</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Services Interested:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${servicesText}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
        </tr>
      </table>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        <strong>Quick Response:</strong> Please reply to ${email} within 24 hours.
      </p>
    `;

    // Send email to user
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: 'Thank You for Your Message - Sharvix Innovations',
      html: userEmailContent
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL, // admin email
      subject: `New Contact Form Submission from ${name}`,
      html: adminEmailContent
    });

    res.json({ 
      success: true, 
      message: 'Emails sent successfully!' 
    });

  } catch (error) {
    console.error('❌ Email sending error:', error.message, error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`📧 Email server running on http://localhost:${PORT}`);
});
