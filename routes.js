const router = require("express").Router();
const Student = require('./Student');

router.get("/show/:number", async (req, res) => {
    const number = req.params.number;
    try {
        let student = await Student.findOne({phone_number: number});

        if (!student) {
            return res.status(404).json({
                message: "Student not Found",
                success: false
            });
        } else {
            return res.json({
                Student: student,
                succes: true
            });
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
});


module.exports = router;