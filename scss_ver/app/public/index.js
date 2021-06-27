window.onload = function(){
  window.addEventListener('scroll', navFunc, false);
  console.log(123)
}

var navFunc = function(){
  const nav = document.getElementById("nav");
  let scrollTop = document.documentElement.scrollTop;
  if(scrollTop <= 100){
    nav.classList.remove('on')
    console.log(123)
  }else{
    nav.classList.add('on')
  }
}