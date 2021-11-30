const gradeService = require('./gradesService');
exports.getListGrade = async function(req, res) {
    let a = await gradeService.getListGrade(req.params.idclass);
    res.json(a);
}
exports.getMembers = async function(req, res) {
    let a = await gradeService.getMembers(req.params.idclass);
    res.json(a);
}
exports.getOneMember = async function(req, res) {
    let a = await gradeService.getOneMember(req.params.studentid);
    res.json(a);
}