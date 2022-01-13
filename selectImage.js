const selectImage = (subpath, imgNum) =>{
  const image = new Image();
  const subPath = subpath;
  const finalPath = subPath + imgNum + ".png";
  return image.src = finalPath;
}