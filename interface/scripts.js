function uploadArquivos() {
    let file = document.querySelector('#file').files[0];

    if (!file){
        alert("coloque um arquivo");
    }

    let formData = new FormData();
    formData.append("file", file);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:3000/arquivos", true);
    xhr.onload = function() {
        console.log(xhr.responseText);
    }
    xhr.send(formData);


xhr.onload = function (event) {
    if (event.lenghtComputable) {
        let percent = (event.loaded / event.total) * 100;
        document.querySelector('#progress').style.widht = percent + "%";
    }
};



xhr.onload = function() {
    
    if (xhr.status){
        document.querySelector('#status').innerHTML = "Upload concluido";
    } else {
        document.querySelector('#status').innerHTML = "Erro no upload";
    }
};

xhr.send(formData);

}