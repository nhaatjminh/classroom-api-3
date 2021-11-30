const express = require('express');
const router = express.Router();
const gradeController = require('./gradesController');

router.get('/:idclass', gradeController.getListGrade);

router.get('/members/:idclass', gradeController.getMembers);
router.get('/onemember/:studentid', gradeController.getOneMember);
module.exports = router;