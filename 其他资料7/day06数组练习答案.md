# 强化练习1

1. 定义一个含有30个整型元素的数组，按顺序分别赋予从2开始的偶数；然后按顺序每五个数求出一个平均值，放在另一个数组中并输出。试编程。

```javascript
   var arr = [2, 4, 6, 8, ..., 60]
   
   // 结果是一个新的数组
   // [6, 16, 26, 36, 46, 56]
```
   
```js
 //定义一个含有30个整数元素的数组，按顺序分别赋予从2开始的偶数；然后按顺序每五个数求出一个平均值，放在另一个数组中并输出。试编程。
    var arr = [];//定义一个的数组
    var tempArr = [];//存放五个元素的数组
    var result = [];
    //含有30个整数元素,循环30次
    for(var i=1;i<=30;i++){
	//按顺序分别赋予从2开始的偶数
	arr.push(i*2);
	tempArr.push(i*2);
	if(i%5==0){
		result.push(getAvg(tempArr));
		tempArr = [];
	}
}
console.log(result);
//定义一个函数专门给数组求均值
function getAvg(arr){
	var sum = 0;
	for(var i=0;i<arr.length;i++){
		sum+=arr[i]
	}
	return sum/arr.length;
}
```

2. 通过循环按执行顺序，做一个5×5的二维数组，赋1到25的自然数，然后输出该数组的左下半三角。试编程。

   ```javascript
   // 结果
   [
     [1, 2, 3, 4, 5],
     [6, 7, 8, 9, 10],
     [11, 12, 13, 14, 15],
     [16, 17, 18, 19, 20],
     [21, 22, 23, 24, 25]
   ]
   ```
    ```js
       var arr = [[],[],[],[],[]];
	var num = 1;
	var str = "<table>";

	for(var i=0;i<arr.length;i++){
		//外层循环表示行
		str+="<tr>";
		//先给数组arr[i],里面给5个元素
		for(var j=0;j<5;j++){			
			arr[i][j] = num++;			
		}	
		for(var h=0;h<=i;h++){
			//每一个arr[i][j]就是行里面的一列
			str+="<td>"+arr[i][h]+"</td>";
		}		
		
		str+="</tr>";		
	}
	str+="</table>";
	console.log(str);
	console.log(arr);
	document.body.innerHTML = str;
    ```
   
# 强化练习2

1. 随机生成一个五位以内的数，然后输出该数共有多少位，每位分别是什么
```js
    //需求:随机生成一个五位以内的数，然后输出该数共有多少位，每位分别是什么
	//技术点:
	//随机生成一个五位以内的数:rand(0,99999)
	//共有多少位:
	//思路1:0-9(1位数)  10-99(2位数)  100-999(3位数) 1000-9999(4位数) 10000-99999(5位数) 
	//思路2:toString()  length
	//每位分别是什么:字符串截取

	//1 随机生成一个五位以内的数
	var num = rand(0,99999);
	console.log(num)
	//2 转成字符串
	var str = num.toString();
	console.log(str)
	//3 共有多少个字符
	console.log("共有"+str.length+"位数字");
	//4 每位分别是什么
	for(var i=0;i<str.length;i++){
		console.log('第'+(i+1)+'位是'+str.charAt(i));
	}
```

2. 数组的冒泡排序

3. 数组的选择排序

4. 编写函数map(arr) 把数组中的每一位数字都增加30%，并返回一个新数组

```js
//需求:编写函数map(arr) 把数组中的每一位数字都增加30%
function map(arr){
	var newArr = arr.map(function(value,index){
		return value+value*0.3;
	})
	return newArr;
}

console.log(map([3,6,9,12]))
```

5. 编写函数has(arr , 60) 判断数组中是否存在60这个元素，返回布尔类型

```javascript
//需求:编写函数has(arr , 60) 判断数组中是否存在60这个元素，返回布尔类型
function has(arr,num){
	for(var i=0;i<arr.length;i++){
		if (arr[i]===num) {
			return true;
		}
	}
	return false;
}

console.log(has([45,2,432,56,60],60))
```

# 强化练习3

1. 编写函数norepeat(arr) 将数组的重复元素去掉，并返回新的数组

   ```javascript
   var arr = [1, 1, 2, 3, 4, 4, 2, 1, 3, 5]
   
   function norepeat() {
     // code in here ...
   }
   
   console.log(norepeat(arr)) // [1, 2, 3, 4, 5]
   ```

2. 有一个从小到大排好序的数组。现输入一个数，要求按原来的规律将它插入数组中。

```js
    //有一个从小到大排好序的数组。现输入一个数，要求按原来的规律将它插入数组中。
	var arr = [1,2,3,4,5,6,7,8];
	var num = 10;
	//如果num大于arr[4],小于等于arr[5],arr[5] = num
	for(var i=0;i<arr.length-1;i++){
		if(num<=arr[0]){
			arr.unshift(num);
			break;
		}
		if(num>arr[i]&&num<=arr[i+1]){
			arr.splice(i+1,0,num);
			break;
		}
		if(num>arr[arr.length-1]){
			arr.push(num);
			break;
		}
	}
	console.log(arr)
```
3. 创建一个对象，该对象存储一个学生的信息，该对象包含学号、身份证、年龄、性别、所学专业等属性信息，同时该对象包含一个自我介绍的方法，用来输出该对象的所有信息