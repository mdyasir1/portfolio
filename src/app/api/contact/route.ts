import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please set EMAIL_USER and EMAIL_APP_PASSWORD in .env.local.' },
        { status: 500 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please fill all fields before sending.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #111;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    const responseMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out — Md Yasir Arafath',
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1220; border-radius: 16px; overflow: hidden; border: 1px solid rgba(99,102,241,0.15);">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px 40px; text-align: center;">
            <h1 style="color: #fff; font-size: 24px; margin: 0; font-weight: 700;">Thank You!</h1>
          </div>
          <div style="padding: 32px 40px; color: #e2e8f0;">
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px;">Hi ${name},</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px;">Thank you for reaching out! I've received your message and will review it shortly. I typically respond within 24 hours.</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px;">In the meantime, feel free to check out my work on <a href="https://github.com/mdyasir1" style="color: #6366f1; text-decoration: underline;">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/mdyasirarafath/" style="color: #6366f1; text-decoration: underline;">LinkedIn</a>.</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px;">Best regards,<br/><strong style="color: #6366f1;">Md Yasir Arafath</strong><br/><span style="color: #8892a4; font-size: 14px;">Frontend Developer</span></p>
          </div>
          <div style="background: #080c14; padding: 16px 40px; text-align: center; border-top: 1px solid rgba(99,102,241,0.1);">
            <p style="color: #8892a4; font-size: 12px; margin: 0;">Hyderabad, India</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(responseMail);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 });
  }
}
