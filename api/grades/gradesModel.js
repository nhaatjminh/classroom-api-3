const db = require("../../database");

exports.getListGrade = (classID) => db.execute(
    "SELECT B.fullname as name, B.grade, C.studentID as student_id , A.id as assignment_id" 
    +  ` FROM assignments as A  
    JOIN grades as B ON A.id = B.assignment_id 
    JOIN accounts as C ON C.studentID = B.student_id  WHERE A.class_id = '${classID}'`
)

exports.getMembers = (classID) => db.execute(
    "SELECT acc.id, acc.name, acc.studentID "
    + "FROM accounts as acc JOIN class_accounts as ca "
    + "ON acc.id = ca.id_account "
    + `WHERE ca.role = 'student' and ca.id_class = ${classID}`
)
exports.getOneMember = (studentid) => db.execute(
    "SELECT name, studentID, phone, address "
    + "FROM accounts " 
    + ` WHERE studentID = '${studentid}'`
)

exports.getAssignmentGrades = (idAssign) => db.execute(
    `SELECT student_id, grade 
     FROM grades 
     WHERE assignment_id = '${idAssign}'`
);

exports.updateGrade= (gradeObj) => db.execute(
    `UPDATE grades
     SET grade ='${gradeObj.grade}'
     WHERE assignment_id = '${gradeObj.assignment_id}' and student_id = ${gradeObj.student_id}`
);