const dash = () => console.log("-".repeat(80));

dash();

const students = [];

const addStudent = (name, age, major, score, active) =>
  students.push({ name, age, major, score, active });

addStudent("fatemeh", 24, "computer", 20, true);
addStudent("ali", 26, "Physics", 18, true);
addStudent("atie", 11, "computer", 12, false);
addStudent("nima", 18, "math", 15, false);
addStudent("akbar", 19, "math", 17.5, true);
addStudent("maryam", 32, "computer", 10, false);
addStudent("alex", 28, "math", 14, true);
addStudent("fariba", 16, "physics", 12, true);
addStudent("asma", 24, "math", 15, true);
addStudent("farokh", 32, "computer", 13.5, true);

const showItem = () => students.forEach((item) => console.log(item));
showItem();
dash();
const increasScore = students.map((item) => {
  return {
    ...item,
    score: item.score + 2,
  };
});

console.log(increasScore);

dash();

const hihgScor = students.filter((item) => item.score >= 17);
console.log(hihgScor);

dash();

const findStudent = students.find((item) => item.name === "farokh");

console.log(findStudent);

dash();

const checkScore = students.some((item) => item.score === 20);

console.log(checkScore);

dash();

const activity = students.every((item) => item.active);

console.log(activity);

dash();

const sumScore = students.reduce((total, scors) => total + scors.score, 0);

console.log(sumScore);

dash();

const averageScor = sumScore / students.length;

console.log(averageScor);

dash();

const numbersOfmajor = students.reduce((total, num) => {
  if (total[num.major]) {
    total[num.major]++;
  } else {
    total[num.major] = 1;
  }
  return total;
}, {});

console.log(numbersOfmajor);

dash();

const bestStudent = students.reduce((bestStu, stu) => {
  if (bestStu.score > stu.score) {
    return bestStu;
  } else {
    return stu;
  }
}, {});

console.log(bestStudent);

dash();

const suggestedStudent = students.filter(
  (item) => item.score >= 17 && item.active,
);

console.log(suggestedStudent);
