/**
 * Created by yanglang on 2015/7/25.
 * jquery-alert 对话框插件
 * @param object 参数包
 * 封装在$.hyc.ui（UI包）下
 * @author yanglang
 */
(function($) {
    !$.hyc?$.hyc={}:"";
    !$.hyc.ui?$.hyc.ui={}:"";
    $.hyc.ui.alert = function(options){
        if($('.uialert').length>0)
            return;
        var defaults = {
            content:'这是一个对话框',
            buttons:[{
                name:'确定',
                id:'confirmBtn',
                color:'#fff',
                bgColor:'#337AB7',
                callback:function(){

                },
                closable:true
            }],
            closable:false
        };

        if($.isPlainObject(options))
            var options = $.extend(defaults, options);
        else{
            defaults.content = options;
            if(arguments.length=2)
                defaults.buttons[0].callback = arguments[1];
            var options = defaults;
        }
        var alerthtml = '<div class="uialert">' +
            '           <div class="uialert_inner"> ' +
            '               <div class="uialert_content">' +
                                options.content +
            '               </div>' +
            '               <div class="uialert_button_container">' +
                                (function(){
                                    var buttons = options.buttons,btnStr = '';
                                    for(var i = 0,len = buttons.length;i<len;i++){
                                        var bgColor = buttons[i].bgColor?buttons[i].bgColor:'#337AB7',
                                            color   = buttons[i].color?buttons[i].color:"#000",
                                            bdColor = buttons[i].bdColor?buttons[i].bdColor:'';
                                            shadow  = bdColor?'box-shadow: 0 0 0 1px '+bdColor+' inset':'',
                                            id      = buttons[i].id?buttons[i].id:'uialertBtn'+ i,
                                            name    = buttons[i].name?buttons[i].name:'确定';
                                        options.buttons[i].id = id;
                                        btnStr += '<button class="action" style="color:'+color+';background:'+bgColor+';'+shadow+'" id="'+id+'" >'+name+'</button>';
                                    }
                                    return btnStr;
                                })()+
            '               </div>' +
            '            </div>' +
            '        </div>';
        var $alert = $(alerthtml).appendTo($('body'));
        $alert.css({
            'margin-left':(-$alert.outerWidth()/2)+'px',
            'margin-top':(-$alert.outerHeight()/2)+'px'
        });
        var $mask = $('<div class="uialert_mask"></div>').appendTo($('body'));
        var close = function(){
            $alert.removeClass('dialog-open').addClass('dialog-close');
            $mask.removeClass('show');
            window.setTimeout(function () {
                $alert.remove();
                $mask.remove();
            },400);
        };
        if(options.closable)
            $mask.on('touchend click', function () {
                close();
            });
        var controlObj = {
            close:close,
            get:function(selector){
                return $(selector,$alert);
            }
        };
        $alert.on('touchend click', function(e){
            if(e.target.id && e.target.tagName == 'BUTTON'){
                var targetBtn = findButton(e.target.id);
                if(targetBtn.callback)
                    targetBtn.callback.apply(controlObj);
                if(targetBtn.closable)
                    close();
            }
            e.stopPropagation();
            e.cancelBubble = true;
            return false;
        });

        function findButton(id){
            for(var i = 0,len = options.buttons.length;i<len;i++){
                if(options.buttons[i].id == id)
                    return options.buttons[i];
            }
        }

        window.setTimeout(function(){
            $alert.addClass('show').addClass('dialog-open');
            $mask.addClass('show');
        },10);

        return controlObj;
    };



})(jQuery);
