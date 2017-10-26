const add = num1 => num2 => {
  console.log(`${num1} + ${num2} = ` + (num1 + num2));
};

let num1 = add(10);

num1(20);
// Add new numbers
add(20)(20);

const question = quest => ans => {
  console.log(`
    Q: ${quest}
    A: ${ans}
  `);
};

let problem = question('When is your Birthday');
problem('February 21');
// New question with answer
question('How old are you')(23);

// Get Average
const array = [1, 2, 3, 4, 5]
const average = (acc, next) => acc + next
console.log(array.reduce(sum) / array.length)