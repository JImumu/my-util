var jc=jc||{};
    jc.js=jc.js||{};
    jc.js.util=jc.js.util||{};
    jc.js.util.net={};

jc.js.util.net.jsonp=function(url,data,onDataArrival){
    var str = typeof data === "object" ? ("obj="+encodeURIComponent(JSON.stringify(data))) : data;
    jc.js.util.net.jsonpStr(url,str,onDataArrival);
};


jc.js.util.net.jsonpStr=function(url,str,onDataArrival){
    var callback = ('jsonp_' + Math.random()).replace(".", "");
    var oHead = document.getElementsByTagName('head')[0];
    var oS = document.createElement('script');
    oHead.appendChild(oS); 

    //创建jsonp回调函数
    window[callback] = function (json) {
        oHead.removeChild(oS);
        window[callback] = null;
        onDataArrival(json);
    };
    oS.src = url + '?' + str + "&callback=" + callback;
};


jc.js.util.net.obj2QueryString = function(obj) {
    var arr = [];
    for (var name in obj) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]));
    }
    return arr.join('&');
};



//类的构建定义，主要职责就是新建XMLHttpRequest对象  
jc.js.util.net.XMLHttpRequestObj = function(){  
    var xmlhttprequest;  
    if(window.XMLHttpRequest){  
        xmlhttprequest=new XMLHttpRequest();  
        if(xmlhttprequest.overrideMimeType){  
            xmlhttprequest.overrideMimeType("text/xml");  
        }  
    }else if(window.ActiveXObject){  
        var activeName=["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];  
        for(var i=0;i<activeName.length;i++){  
            try{  
                xmlhttprequest=new ActiveXObject(activeName[i]);  
                break;  
            }catch(e){  
                         
            }  
        }  
    }  
      
    if(xmlhttprequest == undefined || xmlhttprequest == null){  
        alert("XMLHttpRequest对象创建失败！！");  
    }else{  
        this.xmlhttp=xmlhttprequest;  
    }  
      
    //用户发送请求的方法  
    jc.js.util.net.XMLHttpRequestObj.prototype.send=function(method,url,data,callback,failback){  
        if(this.xmlhttp!=undefined && this.xmlhttp!=null){  
            method=method.toUpperCase();  
            if(method!="GET" && method!="POST"){  
                alert("HTTP的请求方法必须为GET或POST!!!");  
                return;  
            }  
            if(url==null || url==undefined){  
                alert("HTTP的请求地址必须设置！");  
                return ;  
            }  
            var tempxmlhttp=this.xmlhttp;  
            this.xmlhttp.onreadystatechange=function(){  
                if(tempxmlhttp.readyState==4){  
                    if(tempxmlhttp.status==200){  
                        var responseText=tempxmlhttp.responseText;  
                        var responseXML=tempxmlhttp.reponseXML;  
                        if(callback==undefined || callback==null){  
                            alert("没有设置处理数据正确返回的方法");  
                            alert("返回的数据：" + responseText);  
                        }else{
                            if(responseText){
                                callback(JSON.parse(decodeURIComponent(responseText)),responseXML);  
                            }else{
                                callback(responseText)
                            }
                        }  
                    }else{  
                        if(failback==undefined ||failback==null){  
                            alert("没有设置处理数据返回失败的处理方法！");  
                            alert("HTTP的响应码：" + tempxmlhttp.status + ",响应码的文本信息：" + tempxmlhttp.statusText);  
                        }else{  
                            failback(tempxmlhttp.status,tempxmlhttp.statusText);  
                        }  
                    }  
                }  
            }  
            
            if(data && method=="GET")
                url = url + "?" +JSON.stringify(data);
           
            this.xmlhttp.open(method,url,true);  
              
            //如果是POST方式，需要设置请求头  
            if(method=="POST"){  
                this.xmlhttp.setRequestHeader("Content-type","application/x-www-four-urlencoded");  
            }  
            this.xmlhttp.send(JSON.stringify(data));  
        }else{  
            alert("XMLHttpRequest对象创建失败，无法发送数据！");  
        }  
        jc.js.util.net.XMLHttpRequestObj.prototype.abort=function(){  
            this.xmlhttp.abort();  
        }  
    }  
}

jc.js.util.net.get = function(url,reqMsg,onDataArrival){
    var  XMLHttpRequestObj = new jc.js.util.net.XMLHttpRequestObj();
    XMLHttpRequestObj.send("GET",url+"?"+JSON.stringify(reqMsg),undefined,function(resp){onDataArrival(resp)},function(err){console.log(err)})
}

jc.js.util.net.post = function(url,reqMsg,onDataArrival){
    var  XMLHttpRequestObj = new jc.js.util.net.XMLHttpRequestObj();
    XMLHttpRequestObj.send("POST",url,reqMsg,function(resp){onDataArrival(resp)},function(err){console.log(err)})
}
