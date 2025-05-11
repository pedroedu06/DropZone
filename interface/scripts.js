function uploadArquivos() {
    const file = document.querySelector('#file').files[0];

    if (!file) {
        alert("Coloque um arquivo");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://dropzone-4gpl.onrender.com/arquivos", true);

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            const percent = (event.loaded / event.total) * 100;
            document.querySelector('#progress').style.width = percent + "%";
        }
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            document.querySelector('#status').innerHTML = "Upload concluído!";
        } else {
            document.querySelector('#status').innerHTML = "Erro no upload.";
        }

        console.log(xhr.responseText);
    };

    xhr.send(formData);
}