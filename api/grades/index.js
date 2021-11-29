const express = require('express');
const router = express.Router();
const gradeController = require('./gradesController')

router.get('/:idclass', gradeController.getListGrade)
module.exports = router;