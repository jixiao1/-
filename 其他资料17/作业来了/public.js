//写一个函数,判断一个数是否是素数,如果是素数,返回true,如果不是素数,返回false
function isPrimeNumber(number){
	//如果number能被2到number-1中的任意一个整除,都不是素数,如果一个都不能整除,就是素数
	for(var i=2;i<=number-1;i++){
		if(number%i==0){
			return false;
		}
	}

	return true;
}

//返回min到max之间的一个随机整数
function rand(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}

// 返回指定id的元素
function $id(id){
	return document.getElementById(id);
}


//写一个函数,返回一个十六进制的颜色,例如#FFFFFF
function getColor(){
	var str = "#";
	for(var i=1;i<=6;i++){
		str += rand(0,15).toString(16);
	}
	return str;
}


//通过类名获取元素
function getElements(className){
	//先获取所有标签
	var all = document.getElementsByTagName('*');
	//然后从中筛选出符合指定类名的元素,放在一个数组里面返回
	//就需要一个存放元素的空数组
	var result = [];
	//循环判断每一个元素的className是否等于传入的className;
	for(var i=0;i<all.length;i++){
		if(all[i].className == className){
			//这就是符合条件的元素,放到数组中
			result[result.length] = all[i];
		}
		//如果类名不同,就什么都不干
	}
	//把数组通过return返回出去
	return result;
}

/*
使用说明:
dom参数:要获取样式的元素节点
attr参数:要获取的样式名,字符串
返回值:获取到的元素样式的属性值,字符串
*/
function getStyle(dom,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(dom,null)[attr];
	}else{
		return dom.currentStyle[attr];
	}
}


//测算元素距离页面的距离
function getDistance(dom){
	var totalLeft = 0;
	var totalTop = 0;
	do{
		totalLeft+= dom.offsetLeft;
		totalTop+=dom.offsetTop;
		//下一次的dom节点就是本次dom节点的最近的有定位的父元素
		dom = dom.offsetParent;
	}while(dom.nodeName!="BODY")			

	return {
		left:totalLeft,
		top:totalTop
	}

}

//事件监听
function addEvent(dom,type,fn){
	if(dom.addEventListener){
		//说明dom 上有addEventListener这个属性
		dom.addEventListener(type,fn)
	}else{
		//说明是IE678
		dom.attachEvent("on"+type,fn)
	}
}


//封装一个函数,返回鼠标按键,要求:左0  中1  右2
function getButton(e){
	//普通的函数
	if(e){
		//如果接到的e确实有值,说明e不是undefined,说明当前浏览器不是IE678
		return e.button;
	}else{
		//就是IE678
		switch(window.event.button){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;
		}
	}
}

//去除str前后空格
function trim(str){
	return str.replace(/(^\s+)|(\s+$)/g,"")
};