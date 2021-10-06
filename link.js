form.on('submit',function() {
    　　// 此处进行ajax上传
    });

// 检查是否支持FormData
if(window.FormData) {　
    　　var formData = new FormData();
    
    　　// 建立一个upload表单项，值为上传的文件
    　　formData.append('upload', document.getElementById('upload').files[0]);
    　　var xhr = new XMLHttpRequest();
    　　xhr.open('POST', $(this).attr('action'));
    　　// 定义上传完成后的回调函数
    　　xhr.onload = function () {
    　　　　if (xhr.status === 200) {
    　　　　　　console.log('上传成功');
    　　　　} else {
    　　　　　　console.log('出错了');
    　　　　}
    　　};
    　　xhr.send(formData);
    }

xhr.upload.onprogress = function (event) {
    　　if (event.lengthComputable) {
    　　　　var complete = (event.loaded / event.total * 100 | 0);
    　　　　var progress = document.getElementById('uploadprogress');
    　　　　progress.value = progress.innerHTML = complete;
    　　}
    };