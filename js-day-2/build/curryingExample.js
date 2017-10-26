'use strict';

var add = function add(num1) {
  return function (num2) {
    console.log(num1 + num2);
  };
};

var num1 = add(10);

num1(20);
// Add new numbers
add(20)(20);

var question = function question(ques) {
  return function (ans) {
    console.log('\n        Q: ' + ques + '\n        A: ' + ans + '\n        ');
  };
};

var problem = question('When is your Birthday');
problem('February 21');
// New question with answer
question('How old are you')(21);