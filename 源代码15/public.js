function move(dom,attr,target,fn){
    /* 
        move:
            实现dom这个节点的attr属性缓动到target位置(实现div这个节点的width缓动到400)
        形参:
            dom:元素节点
            attr:要缓动的属性,字符串
            target:属性要运动到的目标位置,数值型,如果是透明度请乘以100传入
            fn:是一个函数,这个函数会在动画完成以后执行,是可选参数
    */
    //在函数内部定义的timer是局部变量,只能在本次调用的使用获得,下次调用就会重新产生一个timer
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        //1 起始点
        if(attr == "opacity"){
            var start = parseInt(getStyle(dom,attr)*100);
        }else{
            var start = parseInt(getStyle(dom,attr))
        }  
        //2 计算速度
        var speed = (target - start )/10;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);

        //3 下一个位置
        var next = start + speed;

        //4 定位元素
        if(attr == "opacity"){
            dom.style[attr] = next/100;
            dom.style.filter = "alpha(opacity="+next+")";//兼容ie78
        }else{
            dom.style[attr] = next+"px";
        }
        //停止运动
        if(next==target){
            clearInterval(dom.timer);
            if(fn){
                fn();//动画完成以后执行函数
            }
        }
    },1000/60)

}

function animation(dom,json,fn){
    /* 
        animation:
            实现dom元素缓动到json里面定义的位置
        形参:
            dom:要运动的节点
            json:{left:800,top:600,opacity:50,zIndex:900000},这个对象用于定义要运动到的目标集合
            fn:运动完以后调用的函数,可选    
    
    */
}


//为了考虑兼容性问题,单独封装一个方法,用于获取元素的某个属性值,并返回        
function getStyle(dom,attr){
    if(window.getComputedStyle){
        //因为attr是变量,所以要加[]
        return window.getComputedStyle(dom,null)[attr]
    }else{
        return dom.currentStyle[attr];//IE7,8
    }
}