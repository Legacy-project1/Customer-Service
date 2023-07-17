const router = require("express").Router();
const inquiryController = require("../controllers/inquiryControllers");

router.post("/user/inquiry", inquiryController.userInquiry);
router.get("/admin/inquiry", inquiryController.getInquiry);


module.exports = router;
