import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    // Log received data
    console.log('Received contact form data:', { firstname, lastname, email, phone, service, message });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10), // Ensure port is an integer
      secure: process.env.SMTP_SECURE === 'true', // Should be false for port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // For port 587 and secure: false, consider adding requireTLS: true
      // requireTLS: true,
      // Uncomment and use only if you face certificate issues (not recommended for production)
      // tls: {
      //   rejectUnauthorized: false
      // }
    });

    // Log transporter configuration
    console.log('Nodemailer transporter config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      // pass: '********' // Don't log actual password
    });

    // Email content
    const mailOptions = {
      from: `"${firstname} ${lastname}" <${email}>`, // Use quotes for display name
      sender: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${firstname} ${lastname}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Service:</b> ${service}</p><p><b>Message:</b> ${message}</p>`
    };

    // Log mail options
    // console.log('Mail options:', mailOptions);

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // THIS IS THE MOST IMPORTANT PART: Log the actual error
    // console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}