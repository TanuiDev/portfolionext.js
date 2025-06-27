import nodemailer from 'nodemailer';

export async function GET(req, res) {
  // Replace these with your actual email and app password
  const user = 'bk.kibiwott@gmail.com';
  const pass = process.env.SMTP_PASS;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const mailOptions = {
    from: user,
    to: user,
    subject: 'Portfolio Visited',
    text: 'Someone just visited your portfolio!',
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
} 