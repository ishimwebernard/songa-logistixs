/*eslint-disable*/
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export  default async(message, subject) => {
        try{const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.PARENT_EMAIL,
                    pass: process.env.PARENT_PASSWORD
                }
            });
            await transporter.sendMail({
                from: process.env.PARENT_EMAIL,
                to: `isbernard2001@gmail.com`,
                subject: `${subject}`,
                html: `${message}`
            });
        return {message: 'Email sent succesfully'}   
    }catch(error){
        const _error = `Failed sending the email to , Please try again ...`;
        return {error: _error};
    }
}