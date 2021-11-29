const accountService = require('../../api/accounts/accountService');

exports.teacherAuthority = async(userId, idClass) => {
    if (!userId) {
        return false;
    }

    const result = await accountService.isTeacherOfCLass(userId, idClass);

    return (result[0].role === "teacher");
};

