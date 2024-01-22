let countDownDate = new Date("Dec 24, 2024 00:00:00").getTime();
let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#days").innerHTML = "00";
    document.querySelector("#hours").innerHTML = "00";
    document.querySelector("#minutes").innerHTML = "00";
    document.querySelector("#seconds").innerHTML = "00";
  }
}, 1000);
