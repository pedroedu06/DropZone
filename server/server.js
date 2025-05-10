const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs")

const app = express();
const port = process.env.PORT || 3000;  

app.use('/arquivos',express.static(path.join(__dirname, 'arquivos')));
app.use(cors());
app.use(express.static("interface"));
app.use(cors({origin: "*"}));


const uploadDir = path.join(__dirname, "arquivos");

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, {recursive:true});
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    }, 
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage: storage});
app.use("/arquivos", express.static(uploadDir));
const baseUrl = req.protocol + '://' + req.get('host');

app.get("/buscar", (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            return res.status(500).send("Erro ao ler o diretório");
        }
        const fileList = files.map(file => ({
            name: file,
            url: `${baseUrl}/arquivos/${file}`
          }));
        res.json(fileList);
    });
});

app.post("/arquivos", upload.single("file"), (req, res) => {
    if(!req.file){
        return res.status(400).send("nenhum arquivo enviado")
    }
    res.send("arquivo recebido com sucesso!"); 
});

app.listen(3000, () => console.log("Servidor rodando porta 3000"));