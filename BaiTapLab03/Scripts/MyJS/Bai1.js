function getValue(id) {
    return document.getElementById(id).value.trim();
}
function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}

function validate() {
    var flag = true;
    var studentId = getValue('studentId');
    if (studentId.length != 10 || !/^[a-zA-Z0-9]+$/.test(studentId)) {
        flag = false;
        showError('studentId', 'Mã sinh viên gồm 10 ký tự')
    }
    var name = getValue("name");
    if (name == '' || name.length < 30 || !/^[a-zA-Z0-9]+$/.test(name)) {
        flag = false;
        showError('name', 'Họ tên không rỗng và < 30 ký tự');
    }
    var age = getValue('age');
    if (age > 18) {
        flag = false;
        showError('age', 'Tuổi phải 18 trở lên');
    }
    var language = getValue('language');
    for (var i = 0; i < language.length; i++) {
        if (language[i].checked == true) {
            showError('language', language[i].value);
        }
    }
}
function majorOption() {
    var major = document.getElemntById('major').value;
    var specialty = '';
    switch (major) {
        case 'Hệ thống': specialty = 'Phân tích và thiết kế';
        case 'Phần mềm': specialty = 'Lập trình';
        case 'Mạng máy tính': specialty = 'Quản lý mạng';
    }
}