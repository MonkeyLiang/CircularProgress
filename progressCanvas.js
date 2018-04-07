/*!
 * ringProgress canvas v1.0.0
 *Created by hyl.
 * Date: 2017-05-03 13:59
 */
;(function(window,document,undefined){
	var progressCanvas=function(targetDom,options){
		 if(!(this instanceof progressCanvas))return new progressCanvas(targetDom,options);
        // 参数合并
        this.options = this.extend({
        // 默认参数以后可能会更改所以暴露出去
            r:90,// 半径
            width:150,//宽
            height:150,//高
            bgColor:"#212121",//背景颜色
            lineWidth:"3",//环线宽度
            lineColor:"#333",//环线颜色
            ProgressWidth:"4",//进度条宽度
            ProgressColor:"#17b4eb",//进度条颜色
            textStyle:{
            	fontSize:"25px",
            	fontFamily:" 微软雅黑",
            	fontColor:"#17b4eb"
            },
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
	 progressCanvas.prototype = {
	 	init:function(){
            var that = this; //this指progress对象;
            var options=this.options;
            var dom=that.targetDom;
			//页面设置
    		var percent=that.targetDom.innerHTML;
    		var p=that.pFomart(percent);
    		dom.setAttribute('width',options.width);
    		dom.setAttribute('height',options.height);
    		dom.style.backgroundColor=options.bgColor;

         

    		that.timer(that,options,0,p,1000/p); 	
	 	},
        extend:function(obj,obj2){//参数设置
            for(var k in obj2){
                obj[k] = obj2[k];
            }
            return obj;
        },timer:function(that,options,start,end,interval){
        	window.setTimeout(function(){
			        that.drawProgress(that,start/100,options);
			        start++;
			        if(start<end+1){
			            that.timer(that,options,start,end,interval);
			        }
			    },interval);
        },
        drawProgress:function(dom,percent,options){
        		var c=dom.targetDom;
        		var r=options.r;
			      // 拿到绘图上下文,目前只支持"2d" 
			 	var p=(percent*100).toFixed(0);
			    var cxt=c.getContext("2d");
			    //生成圆形（底圆）     //
            
			    cxt.strokeStyle=options.lineColor;
			    cxt.beginPath();
			    cxt.lineCap="round";
			    cxt.lineWidth=options.lineWidth;			    
			    cxt.arc(r,r,r-5,Math.PI*1.5,Math.PI*3.5,false);
			    cxt.closePath();
			    cxt.stroke();
			    //生成扇形
			    cxt.strokeStyle=options.ProgressColor;
			    cxt.beginPath();
			    cxt.lineCap="round";
			    cxt.lineWidth=options.ProgressWidth;	
			    if(percent==1){
			        cxt.arc(r,r,r-5,Math.PI*1.5,Math.PI*3.5,false);
			    }else if(percent==0){
			        cxt.arc(r,r,r-5,Math.PI*1.5,Math.PI*1.5,true);
			    }else{
			        cxt.arc(r,r,r-5,Math.PI*1.5,Math.PI*1.5+Math.PI*2*percent,false);
			    }
			    cxt.stroke();
			    //生成圆形（上层园）
			    cxt.fillStyle=options.bgColor;
			    cxt.beginPath();
			    cxt.arc(r,r,r-10,Math.PI*1.5,Math.PI*3.5,false);
			    cxt.closePath();
			    cxt.fill();
			    //生成中间百分比文字
			    cxt.font=options.textStyle.fontSize+options.textStyle.fontFamily;
			    cxt.fillStyle=options.textStyle.fontColor;
			    cxt.fillText(p+"%",0.7*r,1.1*r);     
        },
        pFomart:function(percent){
        	if(percent.indexOf('.')==-1){
				return parseInt(percent);
			}else{
				return parseFloat(percent);
			}
        }
	};
	// 暴露方法
    window.progressCanvas = progressCanvas;
})(window,document);

			