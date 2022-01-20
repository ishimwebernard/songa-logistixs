import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line import/no-anonymous-default-export
export  default (message) => {
        try{const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.PARENT_EMAIL,
                    pass: process.env.PARENT_PASSWORD
                }
            });
            transporter.sendMail({
                from: process.env.PARENT_EMAIL,
                to: "isbernard2001@gmail.com",
                subject: "A new bid was placed via Songa Logistics Website!",
                html: `${message}`
            });
        return {message: 'Email sent succesfully'}   
    }catch(error){
        const _error = `Somthing went wrong`;
        return {error: _error};
    }
}