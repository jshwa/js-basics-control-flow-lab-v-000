// Write your code in this file!
let response;

function scuberGreetingForFeet(dist) {
  if(dist <= 400) {
    return 'This one is on me!';
  } else if(dist > 2000 && dist < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  city === "NYC" ? 'Ok, sounds good.' : "No go."
}

