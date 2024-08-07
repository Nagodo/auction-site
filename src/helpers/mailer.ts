import { EmailType } from '@enums/EmailType';
import nodemailer from 'nodemailer';

export const SendEmail = async (email: string, emailType: EmailType, userId: number, token: string) => {
    try {
        
        const port = parseInt(process.env.EMAIL_PORT as string);

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: port,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = GetMailOptions(emailType, email, token);

        if (mailOptions === undefined) {
            throw new Error('Error getting mail options');
        }

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;

        
    } catch (error) {
        console.error('Error sending email', error);
    }
}

function GetMailOptions(emailType: EmailType, email: string, hashedToken: string) {

    if (emailType === EmailType.VERIFY) {
        return {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification',
            text: `Please verify your email by clicking on the following link: ${process.env.DOMAIN}/verify/confirm?token=${hashedToken}`,
        };
    } else if (emailType === EmailType.FORGOT_PASSWORD) {
        return {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Reset Password',
            text: `Please reset your password by clicking on the following link: ${process.env.DOMAIN}/reset-password?token=${hashedToken}`,
        };
    }
}