require.config(require_config);
require(['mui','jQuery'],function(){
    videoended();
    function videoended(){
        var md=document.getElementsByTagName("video")[0];
        var myVideo = document.getElementById("videom");
        md.addEventListener("ended",function(){

            var scale = 1;
            var canvas = document.createElement("canvas"); // 创建一个画布
            canvas.width = md.videoWidth * scale;
            canvas.height = md.videoHeight * scale;
            canvas.getContext('2d').drawImage(md, 0, 0, canvas.width, canvas.height); // getContext:设置画布环境；drawImage:画画 
            var img = document.createElement("img");
            img.src = canvas.toDataURL("image/png"); // 获取图片的url
            $("#video").html(img);

            var selects = '<div class="button left" id="a1">left</div><div class="button right" id="a2">right</div>';
            $("#video").append(selects);
        })
    }
    $("#video").on("click","div",function(){
        var videoId = $(this).attr("id");
        var videoHtml = '<video width="100%" controls id="videos"><source src="video/'+videoId+'.mp4" type="video/mp4" /></video>'
        $("#video").html(videoHtml);
        $('#videos').get(0).play();
        videoended();
    })
    
    
})