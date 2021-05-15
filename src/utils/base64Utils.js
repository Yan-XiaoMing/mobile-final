export function img2base64(img){
  let canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  let ctx = canvas.getContext('2d')
  ctx.drawImage(img,0,0,img.width,img.height)
  let dataUrl = canvas.toDataURL('image/png')
  return dataUrl
}
