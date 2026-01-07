import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Configure your SMTP transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your SMTP host
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'Contact@tenderinfo.in', // Your receiving email
            subject: `New TenderLink Inquiry from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}