const gradeService = require('./gradesService');
exports.getListGrade = async function(req, res) {
    let a = await gradeService.getListGrade(req.params.idclass);
    res.json(a);
}
