/*!
 * ringProgress SVG v1.0.0
 *Created by hyl.
 * Date: 2017-05-03 13:59
 */
;(function(window,document,undefined){
	var ringProgress=function(targetDom,options){
		 if(!(this instanceof ringProgress))return new ringProgress(targetDom,options);
        // 参数合并
        this.options = this.extend({
        // 默认参数以后可能会更改所以暴露出去
            r:"90",// 半径
            bgWidth:"3",//环线宽度
            bgColor:"#333",//环线颜色
            ProgressWidth:"4",//进度条宽度
            ProgressColor:"#7a5bcf",//进度条颜色
        },options);

        // 判断传进来的是DOM还是字符串
        if((typeof targetDom)==="string"){
            this.targetDom = document.querySelector(targetDom);
        }else{
            this.targetDom = targetDom;
        }
         // 初始化
        this.init();
	};

	 ringProgress.prototype = {
	 	init:function(){
            var that = this; //this指progress对象;
            var options=this.options;
			//页面设置
            var perimeter=that.decimalFormat( Math.PI * ( 2 * options.r ),4);//计算圆周长	
			var percent=document.getElementById('percent').innerText / 100;	//获取百分比
			var ringPercent= that.decimalFormat(perimeter-(perimeter * percent),4);//计算进度条的长度
//			console.log(perimeter)
			that.targetDom.innerHTML='<svg class="ring-svg"  xmlns="http://www.w3.org/2000/svg">'+ 
					'<circle id="bgLoop" class="loop" r="'+options.r+'" cy="50%" cx="50%" stroke-width="'+options.bgWidth+'" stroke="'+options.bgColor+'" fill="none"/>'    
					+'<circle id="progress" class="progress" r="'+options.r+'" cy="50%" cx="50%" stroke-width="'+options.ProgressWidth+'" stroke="url(#purple)" stroke-linejoin="round" stroke-linecap="round" fill="none"/>'
					 +'<defs>'      +
					 	'<linearGradient id="purple" x1="0%" y1="0%" x2="100%" y2="0%">'    +    
					 		'<stop offset="0%"   stop-color="'+options.ProgressColor+'"/>'  +   
					 		'<stop offset="100%" stop-color="'+options.ProgressColor+'"/>'    +  
					 	'</linearGradient>' + 
					 '</defs>'+
				'</svg>';
			var progress=document.getElementById('progress');//进度条长度赋值
			progress.style.strokeDasharray=perimeter;
			progress.style.strokeDashoffset=perimeter;
			progress.setAttribute('stroke-dasharray',perimeter);
			progress.setAttribute('stroke-dashoffset',perimeter);
			//			定义页面动画样式	加载页面头部		
			var rule  = "@-webkit-keyframes ring {100% {stroke-dashoffset: "+ringPercent+";}}"
			+"\n"+"@keyframes ring {100% {stroke-dashoffset: "+ringPercent+";}}";
			var style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML =rule;
			document.getElementsByTagName('head')[0].appendChild(style);	
	 	},
        extend:function(obj,obj2){//参数设置
            for(var k in obj2){
                obj[k] = obj2[k];
            }
            return obj;
        },
        decimalFormat:function (s, n){//小数位格式化
		    n = n > 0 && n <= 20 ? n : 2;
		    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		    var l = s.split(".")[0].split("").reverse(),
		        r = s.split(".")[1];
		    t = "";
		    for(i = 0; i < l.length; i ++ )
		    {
		        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "" : "");
		    }
		    return t.split("").reverse().join("") + "." + r;
		}     
	};
	// 暴露方法
    window.ringProgress = ringProgress;
})(window,document);
