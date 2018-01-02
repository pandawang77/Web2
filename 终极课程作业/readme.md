# 我的意面世界

@( 王昊)[2016级| 4班]

**设计目的**：
 
- **1** ：熟练掌握HTML在组织结构上的优势。
- **2** ：熟练掌握CSS在网页布局中的应用。
- **3** ：学习Web标准及浏览器的兼容性。

-------------------


### 功能性需求分析

> 该网站共有3个页面，其中每一个页面的屏幕截图及主要功能如下所列。

（1）	首页：

屏幕截图：

![Alt text](images/index.png)


>主要实现功能：首页导航栏功能：……  首页…… 

（2）	二级页面：![Alt text](images/erj.png)


（3）	三级页面：![Alt text](images/sanj.png)


（4）	其他页面

2.	搜集网站素材![Alt text](images/sucai.png)


3.	建立网站代码目录结构![Alt text](images/mulu.png)
![Alt text](images/sucai2.png)

### 代码块
首页部分
``` htmlbars
<!DOCTYPE html>
<html>
<head>
	<title>欢迎来到我的意面世界</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	<!--页头部分-->
	<div id="header">
    </div>
	<!--页面主体部分部分-->
	<div id="content">
	</div>
	<!--页脚部分-->
	<div id="footer">
    </div>
</body>
</html>
```
二级页面

	<!DOCTYPE html>
	<html>
	<head>
	<title>欢迎来到我的意面世界</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/list.css">
	</head>
	<body>
		<!--页头部分-->
		<div id="header">
		</div>
		<!--页面主体部分部分-->
		<div id="content">
		</div>
		<!--页脚部分-->
		<div id="footer">
	    </div>
	</body>
	</html>
	
5.	编写CSS布局及样式
（1）	CSS布局：
>核心技术：

> Float实现布局：Position辅助布局：

----------

    body{
    background-image: url(../images/bodybg.jpg);
    font-size: 18px;
    color: #bebebe;
    font-family: '宋体';
    border-style: none;
    list-style-type:none;
    background-size: cover;
    background-repeat: repeat-y;
	}
（2）	添加CSS样式：
>通用类属性：


----------

    *{
    margin:0 auto;
    padding: 0;
    border: 0px;
	}	
6.	调试浏览器兼容性
（1）	问题1：

>在IE10+中的表现（屏幕截图）：
![Alt text](images/ie11.png)

>在火狐中的表现（屏幕截图）：
![Alt text](images/Firefox.png)

>在Chrome中的表现（屏幕截图）：
![Alt text](images/chrome.png)

### 问题记录
1.问题表现：相对定位不准，需要自己细心校正位置。
2.问题表现：链接与列表的style设置

### 设计总结
1.需求分析阶段的经验：要考虑面向对象，受众是哪类人群，从而选择合适的界面风格
2.编写HTML代码的经验：先打出一套完整的主体代码，再逐层的进行填充细化，从而可以使得结构清晰明朗。

3.CSS布局的经验：按照一定顺序进行编写，一个网站的页面基本页头页脚是固定的，可以统一设置页头页脚css样式

4.设置CSS样式经验：可先从div的基本设置如长宽、边框、背景，然后是字体风格、

5.调整浏览器兼容性经验：尽量写通用语言，语言标准规范，编写完成后可用验证网站检验

6.Sublime Text使用经验：sublime非常智能，可以自动补充双标签或者检索可能会用到的可用项，但在学习初期应该依靠自己将代码编写出来，尽量少依赖编辑器。

### 课程小结

1.网上参考的内容：设置照片墙的方法

2.浏览器对CSS的兼容性上的不同表现（你所遇到的）：火狐与其他浏览器相比，对于postion的相对定位有一定差别。


