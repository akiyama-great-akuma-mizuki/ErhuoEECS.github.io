function scoll_click(){
    var height = document.body.clientHeight;
    var number = 0;  //控制结束累加器
    var length = 0;  //控制每次翻滚长度
    var frequency = 3;    //控制总时间
    var time = setInterval(function(){
        number += 1;
        if(number == frequency + 1){
            clearInterval(time);
        } else {
            length += height / frequency;
            document.documentElement.scrollTop = length;
        }
    },100);        //每隔多少ms翻滚
}
function scoll_hover(){
    scoll_click();
}