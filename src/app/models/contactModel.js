import mongoose from "mongoose";

mongoose.connect(`${process.env.MONGODBURL}`)

const contactSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phone:{
            type:Number,
            required:true
        },
        Subject:{
            type:String
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required:true
        }
    },
    { timestamps: true }
);

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

