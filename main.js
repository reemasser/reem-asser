let coffe = document.getElementById('coffe');
window.onscroll = function(){
    let value = scrollY;
    coffe.style.left = value + 'px'
}