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
//删除数组里某一项
const removeItemFromArr = (arr, value, key) => {
  let index = 0
  if (key) {
    arr.forEach((e, i) => {
      index = e[key] === value ? i : index
    })
  } else {
    index = arr.indexOf(value)
  }
  return arr.slice(0, index).concat(arr.slice(index + 1))
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

//是否微信
const isWeiXin = () => window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'

//处理表情输入
const filteremoji = emojireg => {
    var ranges = [
        '\ud83c[\udf00-\udfff]', 
        '\ud83d[\udc00-\ude4f]', 
        '\ud83d[\ude80-\udeff]'
    ];
    emojireg = emojireg.replace(new RegExp(ranges.join('|'), 'g'), '[emoji]');
    return emojireg
};

//百分比转换成数字
const percent2num = percent => {
	if(percent.indexOf('%')<0){
		console.error("percent2num参数不是百分比字符串")
	}
	return parseFloat(percent.replace('%'))/100
};

//获取查询字符串
const getQuery = name => {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return decodeURIComponent(r[2]); return null;
}

//获取cookie
const getCookie = name > {
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		return unescape(decodeURI(arr[2]));
	}else{
		return null;
	}	
}

//获取cookie并转换成对象
const getJsonCookie = name => {
	var value = getCookie(name);
	if(value != null){
		return eval('(' + value + ')');
	}else{
		return null;
	}
}

//添加cookie
const SetCookie = (name, value, expires, path, domain, secure) => {
 var today = new Date();
 today.setTime(today.getTime());
 if(expires) { expires *= 86400000; }
 var expires_date = new Date(today.getTime() + (expires));
 document.cookie = name + "=" + escape(value)
  + (expires ? ";expires=" + expires_date.toGMTString() : "")
  + (path ? ";path=" + path : "")
  + (domain ? ";domain=" + domain : "")
  + (secure ? ";secure" : "");
}

//删除cookie
const removeCookie = name => {
	SetCookie(name,"",-1)
}

//检查版本（前者是否大于等于后者）
const checkVersion = (a, b) => {
  a = a.split('.')
  b = b.split('.')
  let checkArr =[]
  for (let i = 0; i < a.length; i++) {
    let x
    if (+a[i] > +b[i]) {
      x = 1
    } else if (+a[i] === +b[i]) {
      x = 2
    } else if (+a[i] < +b[i]) {
      x = 3
    }
    checkArr.push(x)
  }
  for (let j = 0; j < checkArr.length; j++) {
    if (checkArr[j] === 1) {
      return true
    } else if (checkArr[j] === 3) {
      return false
    }
  }
}

//把对象里含单引号的字符转转换成双引号
const changeSingleQuote = obj => {
  for (let n in obj) {
    if ('string' === typeof obj[n])
      obj[n] = obj[n].replace(/'/g, '"')
  }
  return obj
}

//数字缺位补0
const prefixNum = (num, length) => {
  num = '' + num
  if (length < num.length) {
    return num
  }
  let arr =[]
  for (let i = 0; i < length; i++) {
    arr.push('0')
  }
  if (typeof +num !== 'number') {
    return '参数num错误'
  } else {
    arr = arr.slice(0, length - num.length)
    arr.push(num)
    return arr.join('')
  }
}

const riqibuquan = weeksArr => {
    var start = new Date(weeksArr[0])
    var base = +new Date(start.getFullYear(), start.getMonth());
    var end = new Date(weeksArr[weeksArr.length-1])
    var oneDay = 24 * 3600 * 1000;
    var days = (+new Date(end.getFullYear(), end.getMonth()+1) - base) / oneDay
    var date = [];

    for (var i = 1; i <= days; i++) {
        var now = new Date(base);
        base += oneDay
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    }
    return date
}

const sortByASIC = (arr, keyName) => arr.sort((a, b) => keyName ? (a[keyName] < b[keyName] ? -1 : 1) : (a < b ? -1 : 1))

const num2Str = num => { // 将数字转换成科学技术字符串
  num = '' + num
  var numArr = num.split('.')
  var zhenshu = numArr[0].split('').reverse().reduce((a,b,c) => {
	return (c+1)%3 === 0 ? a + b + ',' : a + b
  }, '')
  zhenshu = zhenshu.split('').reverse().join('')
  if (numArr.length > 1) {
	return zhenshu + '.' + numArr[1]
  } else {return zhenshu}
 }

const fomatNum2Money = num => {
  num = (+num || 0) + ''
  if (num.indexOf('.') >= 0) {
    if (num.split('.')[1].length > 2) {
      num = num.replace(/([0-9]+\.[0-9]{2})[0-9]*/, '$1')
    } else {
      num = (+num).toFixed(2)
    }
  } else {
    num = (+num).toFixed(2)
  }
  return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const replaceOverflow = end => strForReplace => {
  strForReplace = strForReplace.replace(':', '')
  strForReplace = strForReplace.replace(end, '')
  let str = ('' + strForReplace).replace(/^0*/, '') || 0
  /* eslint-disable */
  strForReplace = String(Number(strForReplace)) == str ? strForReplace : `"${strForReplace}"`
  return ':' + strForReplace + end
}

//jquery提示
const toast = (msg, time) => {
  const $ = window.$
  let toast = $('<div></div>')
  toast.addClass('fz28')
  toast.text(msg)
  toast.css({
    'position': 'fixed',
    'z-index': '999999',
    'top': '50%',
    'left': '50%',
    'opacity': '0',
    'transform': 'translateX(-50%) translateY(-50%)',
    'transition': 'opacity .2s ease',
    'background-color': 'rgba(0,0,0,.8)',
    'color': '#fff',
    'border-radius': '.13333rem',
    'max-width': '80%',
    'padding': '0.266667rem'
  })
  $('body').append(toast)
  setTimeout(() => {
    toast.css('opacity', 1)
  })
  setTimeout(() => {
    toast.css('opacity', 0)
    setTimeout(() => {
      toast.remove()
    }, 200)
  }, time || 2000)
}
