const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript"; 

document.querySelector('body').appendChild(h2);

function mouseOver(){
    document.getElementById("aboutHead").style.color = "purple";
}

function mouseOut(){
    document.getElementById("aboutHead").style.color = "#0032499c";
}