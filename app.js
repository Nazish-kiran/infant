var body = document.querySelector("body");
var button = document.querySelector("button");
var button2 = document.querySelector(".btn2");
let count = 0;
button.addEventListener("click", function () {
  count++;
  body.classList.remove(
    "larger",
    "largerr",
    "largerrr",
    "largerrrr",
    "largerrrrr"
  );
  if (count == 1) {
    body.classList.add("larger");
    console.log(count);
    
  } else if (count == 2) {
    body.classList.add("largerr");
  } else if (count == 3) {
    body.classList.add("largerrr");
  } else if (count == 4) {
    body.classList.add("largerrrr");
  } else if(count == 5) {
    body.classList.add("largerrrrr");
    button.disabled = true;
  }
  
});
button2.addEventListener("click", function () {
  count = 0;
  body.classList.remove(
    "larger",
    "largerr",
    "largerrr",
    "largerrrr",
    "largerrrrr"
  );
  button.disabled = false;
});

