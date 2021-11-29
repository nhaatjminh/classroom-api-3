const db = require("../../database");

exports.getListGrade = (classID) => db.execute(
    "SELECT C.name, B.grade, C.id as student_id , A.id as assignment_id" 
    +  ` FROM assignments as A  
    JOIN grades as B ON A.id = B.assignment_id 
    JOIN accounts as C ON C.id = B.student_id  WHERE A.class_id = '${classID}'`
);

exports.getAssignmentGrades = (idAssign) => db.execute(
    `SELECT student_id, grade 
     FROM grades 
     WHERE assignment_id = '${idAssign}'`
);