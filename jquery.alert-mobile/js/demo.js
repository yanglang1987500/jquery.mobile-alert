/**
 * Created by sniyve on 2015/7/25.
 */
$(function(){
    $('#btn').click(function () {

        $.hyc.ui.alert('另一个对话框', function () {
            alert('点击了确定');
        });
    });
    $('#btn2').click(function () {
        $.hyc.ui.alert({
            content:'恭喜您注册成功！',
            buttons:[{
                name:'确定',
                id:'confirmBtn',
                color:'#fff',
                bgColor:'#337AB7',
                callback:function(){
                    alert('确定');
                },
                closable:false
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
            closable:false
        });
    });
});