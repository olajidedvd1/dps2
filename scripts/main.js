var myImage = document.querySelector('#banner');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.jpeg') {
      myImage.setAttribute ('src','images/pic2.jpeg');
    }else {
      myImage.setAttribute ('src','images/pic1.jpeg');
    }
}
