// for loop
for (let i=0; i < studentreport.length; i++) {
    if (studentreport[i] < limit) {
        console.log(studentreport[i]);
    }
}

// while loop
let i = 0;
while (i < studentreport.length) {
    if (studentreport[i] < limit) {
        console.log(studentreport[i]);
    }
    i++;
}

// forEach loop
studentreport.forEach(function(item) {
    if (item < limit) {
        console.log(item);
    }
});

// for... in loop
for (let i in studenreport) {
    if (studentreport[i] < limit) {
        console.log(studentreport[i]);
    }
}