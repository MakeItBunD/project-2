const btnOk = document.querySelector('.intro__play');
const wrapperVideo = document.getElementById('.intro__video');

window.onload=btnOk.addEventListener('click',function(){
  wrapperVideo.play();
});

