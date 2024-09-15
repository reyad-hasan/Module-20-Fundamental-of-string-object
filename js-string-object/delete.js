const college = {
  name: "vnc",
  class: ["11", "12"],
  events: ["science", "bijou"],
  color: "blue",
  unique: {
    color: "red",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

console.log(college.unique.result.gpa);
college.unique.result.gpa = 7;
console.log(college.unique.result.gpa);
console.log(college.events[0]);
college.events[0] = "Total";
console.log(college.events[0]);
console.log(college);
delete college.class;
console.log(college);
