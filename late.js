// start coding your function here!
function running_late(date) {
    if(date > "December 17, 1995 22:00:00" || date == "December 17, 1995 22:00:00") {
        return "It is late!";
    } else {
        return "It is still early!";
    }
};

//console.log(running_late('December 17, 1995 08:00:00 AM'));
console.log(running_late('December 17, 1995 21:24:00'));
exports.running_late = running_late;
