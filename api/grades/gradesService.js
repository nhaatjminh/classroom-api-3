const gradesModel = require('./gradesModel');

exports.getListGrade = (classID) => {
    return gradesModel.getListGrade(classID);
}

exports.getAssignmentGrades = (idAssign) => gradesModel.getAssignmentGrades(idAssign);