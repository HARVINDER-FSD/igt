import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server directory first, then root directory if present
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from local dev and deployed frontend
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.FRONTEND_URL, // e.g. https://your-site.onrender.com
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow no-origin requests (Postman, curl) and whitelisted origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// Transporter setup
let transporter;

const setupTransporter = async () => {
  // If user provided SMTP credentials in .env
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('✅ Nodemailer initialized with configured SMTP credentials (' + process.env.SMTP_USER + ')');
  } else {
    // Generate test SMTP service account from ethereal.email for development
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log('ℹ️ Nodemailer: Using Ethereal Test SMTP for dev mode. Emails will generate live preview URLs.');
      console.log('   (To use real email, set SMTP_USER and SMTP_PASS in .env file)');
    } catch (err) {
      console.warn('⚠️ Could not initialize Ethereal account, falling back to JSON stream transporter:', err.message);
      transporter = nodemailer.createTransport({
        jsonTransport: true,
      });
    }
  }
};

await setupTransporter();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Nexus Digital Marketing API',
    nodemailerReady: Boolean(transporter),
    timestamp: new Date().toISOString(),
  });
});

// Main Contact & Lead Generation Form Submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      website,
      service,
      budget,
      timeline,
      message,
      auditRequested,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide Name, Email, and Message.',
      });
    }

    const receiverEmail = process.env.CONTACT_EMAIL_RECEIVER || process.env.SMTP_USER || 'ignitegrowthadvertising@gmail.com';

    // 1. Mail to Agency Owner / Marketing Team
    const adminMailOptions = {
      from: `"Ignite Growth Advertising" <${process.env.SMTP_USER || 'ignitegrowthadvertising@gmail.com'}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `🚀 New Lead: ${name} (${service || 'General Inquiry'})`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: #0B0F19; color: #E2E8F0; border-radius: 16px; border: 1px solid #1E293B; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%); padding: 30px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">IGNITE GROWTH ADVERTISING</h1>
            <p style="color: #F1F5F9; margin: 8px 0 0; font-size: 15px; opacity: 0.95;">🔥 New Client Inquiry Received</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 28px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8; width: 35%;">Client Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #FFFFFF; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Email Address:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B;"><a href="mailto:${email}" style="color: #38BDF8; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Phone Number:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #E2E8F0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Company / Brand:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #E2E8F0;">${company || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Website URL:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #38BDF8;">${website ? `<a href="${website}" target="_blank" style="color: #38BDF8;">${website}</a>` : 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Requested Service:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #A855F7; font-weight: bold;">${service || 'Digital Marketing Strategy'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Monthly Budget:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #10B981; font-weight: bold;">${budget || 'Flexible'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Target Timeline:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #E2E8F0;">${timeline || 'Immediate'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Requested Free Audit:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1E293B; color: ${auditRequested ? '#10B981' : '#94A3B8'}; font-weight: bold;">${auditRequested ? 'YES (Free 360° Growth Audit)' : 'No'}</td>
              </tr>
            </table>

            <div style="background: #111827; border-left: 4px solid #6366F1; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <h4 style="margin: 0 0 8px; color: #94A3B8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Client Objective / Message:</h4>
              <p style="margin: 0; color: #F8FAFC; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Nexus Digital Growth Strategy - Follow Up" style="display: inline-block; background: linear-gradient(135deg, #0EA5E9, #6366F1); color: #FFFFFF; font-weight: 600; padding: 14px 28px; border-radius: 30px; text-decoration: none; box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);">Reply to Client Directly</a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #080C14; padding: 16px; text-align: center; border-top: 1px solid #1E293B; font-size: 12px; color: #64748B;">
            Sent automatically by Nexus Digital Marketing Engine • Received at ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    };

    // 2. Automated Confirmation Mail to the Client
    const clientMailOptions = {
      from: `"Ignite Growth Advertising" <${process.env.SMTP_USER || 'ignitegrowthadvertising@gmail.com'}>`,
      to: email,
      subject: `⚡ Thanks for reaching out, ${name}! Your Marketing Strategy is in progress`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0F19; color: #E2E8F0; border-radius: 16px; border: 1px solid #1E293B; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          <div style="background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%); padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800;">IGNITE GROWTH ADVERTISING</h1>
            <p style="color: #E2E8F0; margin: 6px 0 0; font-size: 14px;">Performance Digital Marketing Agency</p>
          </div>
          <div style="padding: 30px 24px; line-height: 1.6;">
            <p style="font-size: 17px; color: #F8FAFC;">Hi <strong>${name}</strong>,</p>
            <p style="color: #94A3B8;">Thank you for getting in touch with our marketing team. We received your request for <strong>${service || 'Digital Marketing Services'}</strong>.</p>
            
            <div style="background: #111827; border: 1px solid #1E293B; border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #EF4444; font-size: 16px;">What happens next?</h3>
              <ul style="color: #CBD5E1; padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 8px;"><strong>Competitor & Data Analysis:</strong> Our strategists are reviewing your domain and market opportunity.</li>
                <li style="margin-bottom: 8px;"><strong>Actionable Growth Roadmap:</strong> We prepare a customized plan focused on positive ROI and maximum ROAS.</li>
                <li><strong>Direct Call:</strong> Our senior media buyer will contact you within <strong>2 to 4 hours</strong>.</li>
              </ul>
            </div>

            <p style="color: #94A3B8;">If you need urgent assistance or want to jump straight into a strategy session, you can call or WhatsApp us at <strong>+91 7489778541</strong> or reply to this email.</p>
            <p style="color: #E2E8F0; margin-top: 24px;">To explosive growth,<br><strong style="color: #EF4444;">Ignite Growth Advertising Team</strong></p>
          </div>
          <div style="background: #080C14; padding: 14px; text-align: center; border-top: 1px solid #1E293B; font-size: 12px; color: #64748B;">
            © ${new Date().getFullYear()} Ignite Growth Advertising. All rights reserved.
          </div>
        </div>
      `,
    };

    // Send the admin notification
    const adminInfo = await transporter.sendMail(adminMailOptions);
    let previewUrl = null;

    if (nodemailer.getTestMessageUrl) {
      previewUrl = nodemailer.getTestMessageUrl(adminInfo);
      if (previewUrl) {
        console.log('📬 Ethereal Test Email Preview URL:', previewUrl);
      }
    }

    // Try to send client confirmation (silently succeed if client SMTP blocks)
    try {
      await transporter.sendMail(clientMailOptions);
    } catch (clientMailErr) {
      console.warn('Notice: Client confirmation delivery skipped:', clientMailErr.message);
    }

    console.log(`✅ Form submitted successfully for ${name} (${email})`);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. Our senior strategist will contact you within 2 hours.',
      previewUrl: previewUrl || undefined,
    });
  } catch (error) {
    console.error('❌ Error sending mail via Nodemailer:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send message via Nodemailer: ' + error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Nexus Digital Marketing Server running on port ${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/contact`);
});
