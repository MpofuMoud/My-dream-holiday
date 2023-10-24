function visitKorea() {
  let name = prompt("What is your name? ");
  let country = prompt("Where are you from?");
  alert(`Hi ${name}, Thank you for visiting Korea!`);
}

let visitUs = document.querySelector("button");
visitUs.addEventListener("click", visitKorea);
