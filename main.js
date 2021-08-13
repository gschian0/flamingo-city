
//main function to randomize images for avatar generation
const pickImageToBlend =(subpath, amt) => {
  const image = new Image();
  const imgAmt = Math.floor(Math.random() * amt) +1 ;  // number of heads
  const subPath = subpath;
  const finalPath = subPath + imgAmt + ".png";
  return image.src = finalPath;
  }
//array of images for the avatar
const imgArr = [];

window.onload =  () => {
    //create canvas
    const canvas = document.getElementById("canvas");
    //NAME FIRST IMAGE
    let robotHead = new Image();
    //NAMES SECOND IMAGE
    let cloudsImg = new Image();
    cloudsImg.src = pickImageToBlend("img/clouds/cloud", 5);
    robotHead.src = pickImageToBlend("img/colclouds/colcloud", 5);
    
    //assign images to the array
    imgArr[0] = robotHead;
    imgArr[1] = cloudsImg;

    //build robot when images load
    robotHead.onload= () => {
        buildRobot();
}
  // function to render the robot to screen
  let buildRobot = () => {
    var ctx = canvas.getContext("2d");
    canvas.width= canvas.height= 500;
    //draw first image of array
    ctx.drawImage(imgArr[0], (500-robotHead.width),0);
     ctx.blendMode= "multiply";
   
    //draw second image of array
    ctx.drawImage(imgArr[1], (500-cloudsImg.width),0);

    //set up link to canvas and naming of png
    var link = document.getElementById('link');
    link.setAttribute('download', `Avatar${Math.random()}.png`);
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    
  }
}

    
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
    


    //