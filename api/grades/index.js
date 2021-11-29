const express = require('express');
const router = express.Router();
const gradeController = require('./gradesController')

router.get('/:idclass', gradeController.getListGrade)
router.get('/:idClass/:idAssign', gradeController.getAssignmentGrades)

module.exports = router;