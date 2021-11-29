const gradeService = require('./gradesService');
const Authorization = require('../../modules/authorization');

exports.getListGrade = async function(req, res) {
    let a = await gradeService.getListGrade(req.params.idclass);
    res.json(a);
}

exports.getAssignmentGrades = async (req, res) => {
    const isTeacher = await Authorization.teacherAuthority(req.user.id, req.params.idClass);
    if (!isTeacher){
        res.status(404).json({message: "Authorization Secure Error!"});
    } else {
        const assignmentGrades = await gradeService.getAssignmentGrades(req.params.idAssign);

        if (assignmentGrades) {
            res.status(200).json(assignmentGrades);
        } else {
            res.status(404).json({message: 'Update rank failed!'});
        }
    }
}

