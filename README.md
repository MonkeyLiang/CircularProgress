# CircularProgress
通过SCG和Canvas实现的环装进度条  

## Canvas

#### 相关参数
 参数 | 类型 | 说明
----|------|----
r | number  | 圆环的半径值
width | number  | 图表的宽
height | number  | 图表的高
bgColor | string  | 图表的背景颜色
lineWidth | string  | 环线宽度
lineColor | string  | 环线颜色
ProgressWidth | string  | 进度条宽度
ProgressColor | string  | 进度条颜色
textStyle | object  | 文字的样式设置
fontSize | string  | 字体大小
fontFamily | string  | 字体
fontColor | string  | 字体颜色
        
#### 用法
progressCanvas("#canvas",{  
				r:90,// 半径  
	            width:180,//宽  
	            height:180,//高  
	            bgColor:"#212121",//背景颜色  
	            lineWidth:"6",//环线宽度  
	            lineColor:"#333",//环线颜色  
	            ProgressWidth:"5",//进度条宽度  
	            ProgressColor:"#17b4eb",//进度条颜色  
	            textStyle:{  
	            	fontSize:"25px"//字体大小  
	            	fontFamily:" 微软雅黑",//字体  
	            	fontColor:"#17b4eb"//字体颜色  
	         },
			});   
        
          
## SVG
#### 相关参数
 参数 | 类型 | 说明
----|------|----
r | string  | 圆环的半径值
bgWidth | string  | 环线宽度
bgColor | string  | 环线颜色
ProgressWidth | string  | 进度条宽度
ProgressColor | string  | 进度条颜色


#### 用法
ringProgress("#ring",{  
				r:"100",// 半径  
	            bgWidth:"3",//环线宽度  
	            bgColor:"#444",//环线颜色  
	            ProgressWidth:"4",//进度条宽度  
	            ProgressColor:"#17b4eb",//进度条颜色  
			});	  	

 
