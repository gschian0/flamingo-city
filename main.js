//main function to randomize images for avatar generation
const pickImageToBlend =(subpath, amt) => {
  const image = new Image();
  const imgAmt = Math.floor(Math.random() * amt) +1 ;  // number of heads
  const subPath = subpath;
  const finalPath = subPath + imgAmt + ".png";
  return image.src = finalPath;
  }

// generate random color background and other applications 
let generateRandomColor = () => {
  var r = Math.floor(Math.random() * (255-100+1) +100);
  var g = Math.floor(Math.random() * (255-100+1) +100);
  var b = Math.floor(Math.random() * (255-100+1) +100);
  let bgCol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return bgCol;
  }

//array of images for the avatar to supply the canvas context to draw wrapped up for iterating
const imgArr = [];

window.onload =  () => {
    //create canvas
    const canvas = document.getElementById("canvas");
    // SIZE OF INPUT SQUARE
    let squareImageSize = 500;
    //NAME FIRST IMAGE 
    let robotHead = new Image();
    //NAMES SECOND IMAGE
    let cloudsImg = new Image();

    //assign random file to image output
    //quotation is folder path to image collections ... head... body... etc.. etc..
    cloudsImg.src = pickImageToBlend("img/clouds/cloud", 5);
    robotHead.src = pickImageToBlend("img/colclouds/colcloud", 5);

    // add more images to the array by loading them from files from folder
    // let newImage = new Image();
    // newImage.src = pickImageToBlend("img/folder/filename", ammount of images);
    //imgArr[i] = newImage;
    
    //assign images to the array
    imgArr[0] = robotHead;
    imgArr[1] = cloudsImg;
    // ... would be imgARR[2] = nameImg;

    //build robot when images load
    robotHead.onload= () => {
        buildRobot();
}
  // function to render the robot to screen
  let buildRobot = () => {
    const ctx = canvas.getContext("2d");
    canvas.width= canvas.height= squareImageSize;
    
    ctx.fillStyle = generateRandomColor(); 
    
    ctx.alpha = 0.5;
    ctx.fillRect(0, 0, squareImageSize, squareImageSize);
    
    //draw first image of array
    ctx.drawImage(imgArr[0], (squareImageSize-imgArr[0].width),0);
    ctx.globalCompositeOperation = "source-atop";
   
     //draw second image of array
    ctx.drawImage(imgArr[1], (squareImageSize-imgArr[1].width),0);

    
    // would be to draw the next image of the array ... and so on ... 
    // ctx.drawImage(imgArr[2], (500-imgArr[2].width),0);
    
    //set up link to canvas and naming of png
    const link = document.getElementById('link');
    link.setAttribute('download', `Avatar${Math.random()}.png`);
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  }
}



//old logic to keep in mind
   { 
    // link.click();

  

    //* old logic 

    //original code before function wrap
    // let robotHeadNum = Math.floor(Math.random() * 5) +1 ;  // number of heads
    // let robotHeadName = "img/colclouds/colcloud" + robotHeadNum + ".png";
    //robotHead.src = robotHeadName;

    // let cloudsImg = new Image();
    // let cloudsNum = Math.floor(Math.random() * 5) +1 ;  // number of heads
    // let cloudsName = "img/clouds/cloud" + cloudsNum + ".png";
    // cloudsImg.src = cloudsName;

    //to output png to page
    // let output = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    // window.location.href=output; // it will save locally
    


   }