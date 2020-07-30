/* 
    需求分析:
        1 默认显示第一张图片,其他图片都放到右边
        2 根据图片数量生产小圆点
        3 第一个小圆点高亮
        4 点击next看下一张图
        5 点击prev看上一张图
        6 点击小圆点,看对应的图
        7 轮播图可以自动轮播:每隔一段时间自动切换到下一张
        8 鼠标移入轮播图,停止轮播
        9 鼠标移出轮播图,开启轮播
        
*/

//  获取相关元素
var slider = document.getElementById('slider');//总容器
var imgLiS = slider.children[0].children[0].children;//所有图片li的集合
var ctrlContainer = slider.children[1];//所有控制按钮的容器
var width = slider.offsetWidth;//容器的宽度
var timer = null;//定时器变量
//  用一个变量记录当前是第几个li
var index = 0;
// 1 默认显示第一张图片,其他图片都放到右边
for(var i=imgLiS.length-1;i>=0;i--){
    //  先把所有的li放到最右边
    imgLiS[i].style.left = width+"px";
    // 2 根据图片数量生产小圆点
    var point = document.createElement('span');
    // 把小圆点的索引记录在小圆点的innerHTML里面
    point.innerHTML = i;
    point.className = "slider-ctrl-con";//给小圆点添加类名
    ctrlContainer.insertBefore(point,ctrlContainer.children[0])
}

imgLiS[index].style.left = 0;
//3 第一个小圆点高亮(当前图片对应的小圆点高亮)
light();

//利用事件冒泡原理,把prev,next和小圆点上的事件都委托给ctrlContainer
ctrlContainer.onclick = function(e){
    e = window.event ||e;
    var target = e.target||e.srcElement;
    if(target.className == "prev"){
        // 5 点击prev看上一张图
        var newIndex = index - 1;
        //要判断nexIndex是否超出范围,如果超出,就是想看最后面的那一张
        if(newIndex<0){
            newIndex = imgLiS.length-1;
        }
        // 我要看的图必须在左边
        imgLiS[newIndex].style.left = -width+"px";
        // 原来的图去右边
        animation(imgLiS[index],{left:width})
        // 要看的图来中间
        animation(imgLiS[newIndex],{left:0})

        //更新当前索引
        index = newIndex;
        //高亮小圆点
        light()
    }
    else if(target.className == "next"){
        // 4 点击next看下一张图 
        nextImg()

    }

    // str.indexOf('a'):就是查找a在str里面的索引,如果找不到返回-1,如果找到了返回索引
    else if(target.className.indexOf('slider-ctrl-con')>-1){
        // 6 点击小圆点,看对应的图
        var newIndex = target.innerHTML;
        if(newIndex<index){
            //如果要看的图索引比当前小,那要看的图必须在左边
            imgLiS[newIndex].style.left=-width+"px";
            animation(imgLiS[index],{left:width})
            animation(imgLiS[newIndex],{left:0});            
        }
        else if(newIndex>index){
            //如果要看的图索引比当前大,那要看的图必须在右边
            imgLiS[newIndex].style.left = width+"px";
            animation(imgLiS[index],{left:-width})
            animation(imgLiS[newIndex],{left:0})
        }

        //更新当前索引
        index = newIndex;
        //高亮小圆点
        light()

    }
}
// 7 轮播图可以自动轮播:每隔一段时间自动切换到下一张
timer = setInterval(nextImg,2000);

// 8 鼠标移入轮播图,停止轮播
slider.onmouseenter = function(){
    clearInterval(timer)
}
// 9 鼠标移出轮播图,开启轮播
slider.onmouseleave = function(){
    //要用定时器先清定时
    clearInterval(timer);
    timer = setInterval(nextImg,2000);
}

function light(){
    var spanS = ctrlContainer.children;//这是slider-ctrl里面所有span的集合
    //点亮当前图片对应的小圆点
    for(var i=0;i<spanS.length-2;i++){
        //为什么-2?因为span里面还有2个不是小圆点
        spanS[i].className = "slider-ctrl-con";
    }
    //只有当前图片对应的小圆点类名不同
    spanS[index].className = "slider-ctrl-con current";
}

function nextImg(){
    //功能:显示当前index的下一张

        var newIndex = index+1;//newIndex就是我马上要看的下一张图片的索引
        //要判断nexIndex是否超出范围,如果超出,就是想看最前面那一张
        if(newIndex>imgLiS.length-1){
            newIndex = 0;
        }
        imgLiS[newIndex].style.left = width+"px";//我要看的图必在右边
        animation(imgLiS[index],{left:-width});//原来的图去左边
        animation(imgLiS[newIndex],{left:0});//要看的图来中间
        //更新当前图片的索引
        index = newIndex;
        //高亮当前图片对应的小圆点
        light();
}