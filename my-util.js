//根据已有数组排序方法对新数组进行排序
function sortByOldArr(oldArr,newArr){
    if(oldArr.length !== newArr.length){
        alert('新老数组长度不一，无法判断')
        return;
    }else if(oldArr.length === 0){
        alert('数组长度不能为0')
        return;
    }
    var b = oldArr.map((e, i) => ({index:i,num:e}));
    b.sort((a,b) => a.num - b.num);
    newArr.sort((a,b) => a - b)
    var newb = newArr.map((e, i) => ({index:b[i].index,num:e}));
    newb.sort((a, b) => a.index - b.index);
    return newb.map(e => e.num);
}

//把字符串日期转换为日期对象
const changeDateStrDate = date => {
  var dateArr = date.split(/[-/\s:]/g);
  return new Date(dateArr[0],dateArr[1],dateArr[2],dateArr[3],dateArr[4],dateArr[5]).getTime();
}

//获取年
const getDateStrYear = time => {
  time = typeof time === 'string' ? changeDateStrDate(time) : time;
  return getYear(time);
};
//获取日
const getDateStrDay = time => {
  time = typeof time === 'string' ? changeDateStrDate(time) : time;
  return getDay(time);
};
//获取月
const getDateStrMonth = time => {
  time = typeof time === 'string' ? changeDateStrDate(time) : time;
  return getMonth(time);
};
//获取年
const getYear = time => {
  return new Date(time).getFullYear();
};
//获取日
const getDay = time => {
  return new Date(time).getDate()>=10?new Date(time).getDate():"0"+new Date(time).getDate();
};
//获取月
const getMonth = time => {
  return new Date(time).getMonth()+1>=10?new Date(time).getMonth()+1:"0"+(new Date(time).getMonth()+1);
};
//获取时
const getHours = time => {
  return new Date(time).getHours()>=10?new Date(time).getMonth()+1:"0"+(new Date(time).getMonth()+1);
};
//获取分
const getMinutes = time => {
  return new Date(time).getMinutes()>=10?new Date(time).getMonth()+1:"0"+(new Date(time).getMonth()+1);
};
//获取秒
const getSeconds = time => {
  return new Date(time).getSeconds()>=10?new Date(time).getMonth()+1:"0"+(new Date(time).getMonth()+1);
};
//把时间字符串转换为xxx前
const getDateDiff = dateStr => {
  if(typeof dateStr === 'undefined'){
    var publishTime = new Date().getTime()/1000;
  }else{
    var dateArr = dateStr.split(/[-/\s:]/g);
    var publishTime = new Date(dateArr[0],dateArr[1]-1,dateArr[2],dateArr[3],dateArr[4],dateArr[5]).getTime()/1000;
  }
    var d_seconds,
    d_minutes,
    d_hours,
    d_days,
    timeNow = parseInt(new Date().getTime()/1000),
    d,

    date = new Date(publishTime*1000),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  //小于10的在前面补0
  if (M < 10) {
      M = '0' + M;
  }
  if (D < 10) {
      D = '0' + D;
  }
  if (H < 10) {
      H = '0' + H;
  }
  if (m < 10) {
      m = '0' + m;
  }
  if (s < 10) {
      s = '0' + s;
  }

  d = timeNow - publishTime;
  d_month = parseInt(d/(86400*30));
  d_year = parseInt(d/(86400*30*12));
  d_days = parseInt(d/86400);
  d_hours = parseInt(d/3600);
  d_minutes = parseInt(d/60);
  d_seconds = parseInt(d);


  if(d_days > 0 && d_month < 1){
    return d_days + '天前';
  }else if(d_days <= 0 && d_hours > 0){
    return d_hours + '小时前';
  }else if(d_hours <= 0 && d_minutes > 0){
    return d_minutes + '分钟前';
  }else if (d_seconds < 60) {
    if (d_seconds <= 0) {
      return '刚刚发表';
    }else {
      return d_seconds + '秒前';
    }
  }else if (d_month >= 1 && d_year<1) {
    return d_month + '月前'
  }else{
    return Y + '.' + M + '.' + D ;
  }
};
//把时间对象转换为字符串
const changeDateToStr = (date, style) =>{
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let getMinutes = date.getMinutes()
  let getSeconds = date.getSeconds()
  let dateStr;
  month = month >= 10 ? month : ('0' + month)
  day = day >= 10 ? day : ('0' + day)
  hours = hours >= 10 ? hours : ('0' + hours)
  getMinutes = getMinutes >= 10 ? getMinutes : ('0' + getMinutes)
  getSeconds = getSeconds >= 10 ? getSeconds : ('0' + getSeconds)
  if(style === 'YY'){
    dateStr = year + ''
  }else if(style === 'YY-MM'){
    dateStr = year + '-' + month
  }else if(style === 'YY-MM-DD'){
    dateStr = year + '-' + month + '-' + day
  }else if(style === 'YY-MM-DD HH:MM:SS'){
    dateStr = year + '-' + month + '-' + day + ' ' +
              hours + ':' + getMinutes + ':' + getSeconds
  }
  return dateStr
}
//数字转换为千、万
const getNumDiff = num => {
  if(num >= 1000 && num < 10000){
    return (num/1000).toFixed(1) + 'k'
  }else if(num >= 10000){
    return (num/10000).toFixed(1) + 'w'
  }else{
    return num || '0'
  }
};
//生成随机字符串
const generateUUID = () => {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
//查询数组中某一项
const queryArrayItem = (arr, key, value) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i][key] === value){
      return arr[i]
    }
  }
  return {}
};
//保留两位小数
const tofixed2 = (num) => {
  if(!num){
    return '0.00'
  }else{
    return num.toFixed(2)
  }
};
//编码转换成明文
const renderText = text => {
  try{
    text = unescape(decodeURIComponent(text))
  }catch(err){
    text = unescape(text)
  }
  try{
    text = unescape(decodeURIComponent(text))
  }catch(err){
    text = unescape(text)
  }
  return text
}
//提取html中非标签元素
const delHtmlTag = str => str.replace(/<[^>]+>/g,"");