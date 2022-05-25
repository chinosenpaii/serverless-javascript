// start coding your function here!
function running_late(date) {
    if(date > "December 17, 1995 10:00:00 PM" || date == "December 17, 1995 10:00:00 PM") {
        return "It is late!";
    } else {
        return "It is still early!";
    }
};

//console.log(running_late('December 17, 1995 08:00:00 AM'));
//console.log(running_late('December 17, 1995 11:30:00 PM'));
exports.running_late = running_late;
