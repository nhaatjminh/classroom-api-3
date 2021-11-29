const classesModel = require('./classModel');

exports.list = (userId) => classesModel.getClassesByUserId(userId);
exports.create = (name, userId, description) => classesModel.addClass(name, userId, description);

exports.detail = (classId, callback) => classesModel.getClasses().then(function(results) {
    var result = results.find(c => c.id === classId);
    callback(result);
})

exports.isCreatorOfClass = async (teacherId, classId) => {
    var creator = await classesModel.getCreatorByClassId(classId);
    
    return (creator === teacherId);
}

exports.getMembersByClassId = (classId, role) => classesModel.getMembersByClassId(classId, role);