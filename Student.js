const { Schema, model } = require("mongoose");

const StudentSchema = new Schema(
    {
        student_id: {
            type: String,
            required: true
        },
        course: {
            type: String,
            required: true
        },
        school: {
            type: String,
            required: true
        },
        phone_number: {
            type: Number,
            required: true
        }
    }
);


module.exports = model("Student",  StudentSchema);
