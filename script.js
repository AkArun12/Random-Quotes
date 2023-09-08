const btn = document.getElementById("btn");

const output = document.querySelector(".output");

let quote = [
  "To love oneself is the beginning of a lifelong romance.",
  "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
  "Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape.",
  "Time you enjoy wasting is not wasted time.",
  "Self-care is how you take your power back.",
  "Being happy never goes out of style.",
];


btn.addEventListener("click",function() {


    let random=Math.floor(Math.random()*quote.length)

    output.textContent = quote[random];

    
});
