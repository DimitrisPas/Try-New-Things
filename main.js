const idea = document.querySelector(".idea");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      idea.textContent = `${data.activity}.`;
    });
  idea.classList.add("test");
});
