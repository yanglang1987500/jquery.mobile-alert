# jquery.mobile-alert
移动端的弹出框，简洁，明了，使用简单，具有CSS3动画，以后会考虑扩充更多动画
示例代码中有使用方式，有两种使用方式：
1，直接$.hyc.ui.alert('提示框内容');
   会自动打开一个带有确定按钮的对话框，如果需要点击确定之后回调，直接添加第二个参数为回调函数即可
   $.hyc.ui.alert('提示框内容',function(){});
2，需要多个不同按钮
  $.hyc.ui.alert({
            content:'恭喜您注册成功！',
            buttons:[{
                name:'确定',//按钮文字
                id:'confirmBtn',//按钮id 方便添加自定义事件
                color:'#fff',//字体颜色
                bgColor:'#337AB7',//按钮背景色
                callback:function(){//点击按钮回调函数
                    alert('确定');
                },
                closable:false//点击按钮是否自动关闭提示框
            },{
                name:'取消',
                id:'cancelBtn',
                color:'#337AB7',
                bdColor:'#337AB7',
                bgColor:'#fff',
                callback:function(){
                    this.close();
                },
                closable:false
            }],
            closable:false//是否失去焦点自动关闭 比如点击外部蒙版区域会自动关闭
        });
    });
