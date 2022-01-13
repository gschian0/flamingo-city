//main function to randomize images for avatar generation
const pickImageToBlend =(subpath, amt) => {
  const image = new Image();
  const imgAmt = Math.floor(Math.random() * amt) +1 ;  // number of heads
  const subPath = subpath;
  const finalPath = subPath + imgAmt + ".png";
  return image.src = finalPath;
  }

  const selectImage = (subpath, imgNum) =>{
    const image = new Image();
    const subPath = subpath;
    const finalPath = subPath + imgNum + ".png";
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
    let squareImageSize = 1600;
    //NAME FIRST IMAGE 
    let layer1 = new Image();
    //NAMES SECOND IMAGE
    let layer2 = new Image();
    let layer3 = new Image();
    let layer4 = new Image();
    let layer5 = new Image();
    let layer6 = new Image();
    let layer7 = new Image();


    //assign random file to image output
    //quotation is folder path to image collections ... head... body... etc.. etc..
    
    layer1.src = selectImage("img/Layer1/Common/", 1);
    layer2.src = selectImage("img/Layer2/Common/", 5);
    layer3.src = selectImage("img/Layer3/Common/", 2);
    layer4.src = selectImage("img/Layer4/Common/", 3);
    layer5.src = selectImage("img/Layer5/Common/", 4);
    layer6.src = selectImage("img/Layer6/Common/",2);
    layer7.src = selectImage("img/Layer7/Common/", 3);
    // add more images to the array by loading them from files from folder
    // let newImage = new Image();
    // newImage.src = pickImageToBlend("img/folder/filename", ammount of images);
    //imgArr[i] = newImage;
    
    //assign images to the array
    imgArr[0] = layer1;
    imgArr[1] = layer2;
    imgArr[2] = layer3;
    imgArr[3] = layer4;
    imgArr[4] = layer5;
    imgArr[5] = layer6;
    imgArr[6] = layer7;
    // ... would be imgARR[2] = nameImg;
    let button1 = document.getElementById("select1");
    //build robot when images load
    layer1.onload= () => {
        buildRobot();
        button1.addEventListener("click", (e) => {
            console.log(e)
            console.log(imgArr);
        })
}
  // function to render the robot to screen
  let buildRobot = (ol1, ol2, ol3, ol4, ol5, ol6, ol7) => {
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.height= squareImageSize;
    
    ctx.alpha = .5;
    ctx.fillRect(0, 0, squareImageSize, squareImageSize);

    // if(imgArr){
    // imgArr[0].src = selectImage(`img/Layer1/Common/`, ol1);
    // imgArr[1].src = selectImage(`img/Layer1/Common/`, ol2);
    // imgArr[3].src = selectImage(`img/Layer3/Common/`, ol3);
    // imgArr[4].src = selectImage(`img/Layer4/Common/`, ol4);
    // imgArr[5].src = selectImage(`img/Layer5/Common/`, ol5);
    // imgArr[6].src = selectImage(`img/Layer6/Common/`, ol6);
    // imgArr[7].src = selectImage(`img/Layer7/Common/`, ol7);
    // }

    //draw first image of array
    // ctx.globalCompositeOperation = "source-atop";
   
    ctx.globalCompositeOperation = "source-over";
    imgArr[0].src = selectImage(`img/Layer1/Common/`, 1);
    ctx.globalCompositeOperation = "source-atop";
    // imgArr[1].src = selectImage(`img/Layer2/Common/`,  1)
    // ctx.globalCompositeOperation = "source-over";
    // imgArr[2].src = selectImage(`img/Layer3/Common/`, ol3)
    // ctx.globalCompositeOperation = "source-atop";
    // imgArr[3].src = selectImage(`img/Layer4/Common/`, ol4)
    // imgArr[4].src = selectImage(`img/Layer5/Common/`, ol5)
    // imgArr[5].src = selectImage(`img/Layer6/Common/`, ol6)
    // imgArr[6].src = selectImage(`img/Layer7/Common/`, ol7)
   for(i = 0; i < imgArr.length; i++){
    ctx.drawImage(imgArr[i], (squareImageSize-imgArr[i].width),0);
    // console.log(imgArr[1]);
     } 


    const link = document.getElementById('link');
    link.setAttribute('download', `Avatar${Math.random()}.png`);
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));

    // const link2 = document.getElementById('link2');
  }
}



//old logic to keep in mind
   { 
    // link.click();

  

    //* old logic 

    //original code before function wrap
    // let layer1Num = Math.floor(Math.random() * 5) +1 ;  // number of heads
    // let layer1Name = "img/colclouds/colcloud" + layer1Num + ".png";
    //layer1.src = layer1Name;

    // let layer2 = new Image();
    // let cloudsNum = Math.floor(Math.random() * 5) +1 ;  // number of heads
    // let cloudsName = "img/clouds/cloud" + cloudsNum + ".png";
    // layer2.src = cloudsName;

    //to output png to page
    // let output = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    // window.location.href=output; // it will save locally
    


   }