function display_random_image() 
{
     var theImages = [{
        src: "../elwyn578.github.io/media/images/ali-1.png",
        width: "240",
        height: "160"
    }, {
        src: "../elwyn578.github.io/media/images/ali.png",
        width: "320",
        height: "195"
    }, {
        src: "../elwyn578.github.io/media/images/ali-2.png",
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}