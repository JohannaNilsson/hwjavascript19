function burger() {
    //setup variables to target IDs on the page
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    //add styling so page changes when burger function is clicked
    burger.style.padding = "16px 16px 200vw 200vw";
    links.style.display = 'flex';
    quit.style.display = 'inline';
}

function quit(){
    //setup variables to target IDs on the page
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    //add styling so page changes when burger function is clicked
    burger.style.padding = "16px 16px 32px 32px";
    links.style.display = 'none';
    quit.style.display = 'none';
}

$('.carousel').carousel({
    interval: 1000
  })