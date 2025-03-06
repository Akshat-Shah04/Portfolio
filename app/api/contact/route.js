import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        // Set up SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // TLS requires false
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email details
        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_TO, // Your email address
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        return Response.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Email sending error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
