
// we store our correct answers in a variable
let correctAnswers = ["B", "B", "B", "B"];

let result = document.querySelector(".result"); // we created a variable to our score result

// we store our form in a variable too with the class "quiz-form"
let form = document.querySelector(".quiz-form");

//we have to create an even listener. we create it to our form.
form.addEventListener("submit", (e) => {
  //we event listener trigged when we try to submit the form, and the e stands for an event, the event that will happens when we submit the form. you can name the event anything. I just used e to shorten my word. that is an arrow function.
  e.preventDefault(); //i used preventDefault on the event to stop browser action when we submit.

  let score = 0; // i created a score variable to store the score of the user, and starting with 0.

  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ]; // this part is a little bit confusing but i will explain it.... i created a variable to store what the user pick. form.q1.value is referring to the form variable at the top and q1 is the value i gave my name attribute inside my html, value is the value the user choose.
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    } // i circled through the userAnswer. forEach can only have to two parameters..."value of the what we are circling through" and "the index value".   i used "if" to check the answer the user produced and the correct answers at the top... Bayo you will see i used strict equality "===". if the the answer correct 25 will be added to our score variable we created in line 12.
  });

  console.log(score); // i just have to stop here, i will continue tomorrow. sleep don dey catch your bros!!!!!!!!!
  scrollTo(0, 0); // scroll to the top after we submit
  // result.querySelector('span').textContent = `${score}%`; // we query span selector in the result div so that we can change the inner text/ text content.
  result.classList.remove("d-none"); // we remove the class of display none 'd-none' so that the result can be shown.

  //Animation---------
  let output = 0; // to begin with.
  let timer = setInterval(() => {
    //we pass in our statement inside this callback function.
    result.querySelector("span").textContent = `${output}%`; // we want to display the output.
    if (output === score) {
      // to check if our output and score are the same.. if they are thesame the timer will stop
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10); // the 10 here is the rate at which it count.
});

// i tried ohhhh.... na me typed ds kan line..lol!!!
// open your console to view your score..... na tomorrow i go display for the page.....


// let correctAnswers = ["B", "B", "B", "B"];

// let form = document.querySelector(".quiz-form");

// let result = document.querySelector(".result");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let score = 0;
//   let userAnswers = [
//     form.q1.value,
//     form.q2.value,
//     form.q3.value,
//     form.q4.value,
//   ];

//   userAnswers.forEach((answer, index) => {
//     if (answer === correctAnswers[index]) {
//       score += 25;
//     }
//   });

//   scrollTo(0, 0);

//   result.classList.remove("d-none");

//   let output = 0;
//   let timer = setInterval(() => {
//     result.querySelector("span").innerText = `${output}%`;
//     if (output === score) {
//       clearInterval(timer);
//     } else {
//       output++;
//     }
//   }, 10);
// });
