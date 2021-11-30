const gradesModel = require('./gradesModel');

exports.getListGrade = (classID) => {
    return gradesModel.getListGrade(classID);
}
exports.getMembers = (classID) => {
    return gradesModel.getMembers(classID);
}
exports.getOneMember = (studentid) => {
    return gradesModel.getOneMember(studentid);
}

exports.getAssignmentGrades = (idAssign) => gradesModel.getAssignmentGrades(idAssign);

