const express = require('express');
const router = express.Router();
const gradeController = require('./gradesController');

router.get('/:idclass', gradeController.getListGrade);

router.get('/members/:idclass', gradeController.getMembers);
router.get('/onemember/:studentid', gradeController.getOneMember);

router.get('/:idclass', gradeController.getListGrade)
router.get('/:idClass/:idAssign', gradeController.getAssignmentGrades)
router.post('/update/:idClass/:idAssign', gradeController.updateGrade);

module.exports = router;