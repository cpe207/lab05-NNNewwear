[];
// assign interface/type to the function definition properly
function findTopNames(students) {
    var check = students.filter(function (a) { return a.score > 8; });
    return check.map(function (student) { return student.name; });
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
