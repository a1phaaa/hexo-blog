//标题
var OriginTitile = document.title;    // 保存之前页面标题
var titleTime;
document.addEventListener('visibilitychange', function(){
    if (document.hidden){
        document.title = '||o(*°▽°*)o|Ю [有人吗?]';
        clearTimeout(titleTime);
    }else{
        document.title = '（づ￣3￣）づ╭❤️～';
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 3000); // 3秒后恢复原标题
    }
});