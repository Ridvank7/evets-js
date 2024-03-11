console.log("*** EVENTS ***");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header");

//? 2. method
h1.onmouseover = function () {
  h1.style.color = "red";
  console.log("onmouseover");
};

h1.onmouseout = () => {
  h1.style.color = "black";
  console.log("onmouseout");
};

//? 3. method (addEventListener)
h1.addEventListener("click", () => {
  alert("H1 Pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  //   if (!input.value) {
  //     alert("Please enter an item");
  //   } else {
  //     alert(`${input.value} entered`);
  //   }

  !input.value
    ? alert("Please enter an item")
    : alert(`${input.value} entered`);

  input.value = "";
  input.focus();
});

//* EXAMPLE-3 (onload)
//* -------------------------------------------------

window.onload = function () {
  document.querySelector("#input").focus();
};

//* EXAMPLE-4
//* -------------------------------------------------
const list = document.querySelectorAll(".list");

list.forEach((li) => {
  li.style.transition = "all 0.9s";
  li.style.lineHeight = "2rem";

  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(10px)";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translateX(-10px)";
  };
});
