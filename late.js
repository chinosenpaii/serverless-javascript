// start coding your function here!
function runnning_late(date) {
    if (date.getHours() == 22 || date.getHours() > 22) {
        return "It is late!";
    } else {
        return "It is still early!";
    }
}

exports.running_late = running_late;