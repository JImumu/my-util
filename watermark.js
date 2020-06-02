const watermark = {}

const setWatermark = (str) => {
  const id = '1.23452384164.123412415'

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
 
  const can = document.createElement('canvas')
  can.width = 180
  can.height = 120
 
  const cans = can.getContext('2d')
  cans.rotate(-20 * Math.PI / 180)
  cans.font = '12px 微软雅黑'
  cans.fillStyle = 'rgba(224, 224, 224, 1)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(str, 0, can.height / 2)
 
  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '0px'
  div.style.left = '0px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = '100%'
  div.style.height = '100%'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
  return id
}
 
// 该方法只允许调用一次
watermark.set = (str) => {
  setWatermark(str)
}
 
export default watermark
