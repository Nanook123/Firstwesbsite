const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript"; 

document.querySelector('body').appendChild(h2);


document.getElementById("event").addEventListener("mouseover", mouseOver);
document.getElementById("event").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("event").style.color = "red";
}

function mouseOut() {
  document.getElementById("event").style.color = "black";
}
