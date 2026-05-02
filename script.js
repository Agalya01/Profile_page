console.log("JS is working!");

let count = 0;

function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrease() {
  count--;
  document.getElementById("count").innerText = count;
}

function handleSubmit(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;

  document.getElementById("responseMsg").innerText =
    "Thank you " + name + "! Your message was sent.";
}