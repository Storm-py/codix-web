import { Contact } from "../../models/contactModel.js";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const contact = await req.json();

    if (!contact.firstName || !contact.lastName || !contact.phone || !contact.email || !contact.message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }


    await Contact.create({
      firstName: contact.firstName,
      lastName: contact.lastName,
      subject: contact.subject,
      phone: contact.phone,
      email: contact.email,
      message: contact.message,
    });


    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: contact.email, 
      to: process.env.EMAIL_USER, 
      subject: `New contact form submission from ${contact.name}`,
      text: `Name: ${contact.firstName ,contact.lastName}\nEmail: ${contact.email}\n Subject:${contact.subject}\n Message: ${contact.message} \n Phone Number : ${contact.phone}`,
    };

    
    await transporter.sendMail(mailOptions);


    return NextResponse.json({ message: "Contact added and email sent successfully" }, { status: 201 });
  } catch (error) {
    console.log("This is the error in contact route", error);
    return NextResponse.json({ message: "Failed to process contact form" }, { status: 500 });
  }
}
