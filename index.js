const calculate = document.querySelector('#calculateBtn');
const reset = document.querySelector('#resetBtn');
const input = document.querySelector('#dateOfBirth');

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    showAge();
  }
})

calculate.addEventListener('click', showAge);

function showAge() {
  function calculateAge() {
const years = document.querySelector('#years');
const months = document.querySelector('#months');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

  let birthDay = new Date(input.value).getTime();
  let now = new Date().getTime();
  console.log(now);
  console.log(birthDay);

  let diff = now - birthDay;
  console.log(diff)

    let displaySeconds = diff / 1000;
    let displayMinutes = displaySeconds / 60;
    let displayHours = displayMinutes / 60;
    let displayDays = displayHours / 24;
    let displayMonths = displayDays / 30.4375;
    let displayYears = displayMonths / 12;

    years.textContent = Math.floor(displayYears);
    months.textContent = Math.floor(displayMonths % 12);
    days.textContent = Math.floor(displayDays % 30.4375);
    hours.textContent = Math.floor(displayHours % 24);
    minutes.textContent = Math.floor(displayMinutes % 60);
    seconds.textContent = Math.floor(displaySeconds % 60);

    if (diff <= 0 || input.value == "") {
      clearInterval(timerID);
      years.textContent = 0;
      months.textContent = 0;
      days.textContent = 0;
      hours.textContent = 0;
      minutes.textContent = 0;
      seconds.textContent = 0;
      Swal.fire({
        icon: "warning",
        title: "Check birthday date!",
        text: "Do not enter future or empty dates",
      });
    }
  }
  let timerID = setInterval(calculateAge, 1000);
}

reset.addEventListener("click", () => {
  window.location.reload();
});

