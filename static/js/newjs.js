document.addEventListener('DOMContentLoaded', function() {
    var generateButton = document.getElementById('generateButton');
    var promptInput = document.getElementById('promptInput');
    var generatedImageContainer = document.getElementById('generatedImageContainer');

    generateButton.addEventListener('click', function() {
        var prompt = promptInput.value;
        if (prompt) {
            generateButton.textContent = '生成中...';
            generateButton.disabled = true;

            fetch('/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: prompt })
            })
            .then(response => response.json())
            .then(data => {
                if (data.image) {
                    var img = new Image();
                    img.src = 'data:image/png;base64,' + data.image;
                    generatedImageContainer.innerHTML = '';
                    generatedImageContainer.appendChild(img);
                } else if (data.error) {
                    alert('Error: ' + data.error);
                }
            })
            .catch(error => {
                alert('Error: ' + error);
            })
            .finally(() => {
                generateButton.textContent = '生成图像';
                generateButton.disabled = false;
            });
        } else {
            alert('请输入提示词！');
        }
    });
});