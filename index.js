const express=require('express');
const multer=require('multer');
const upload=multer({dest: 'users-photos'});
//const fs=require('fs').promises;
//const reader=require('image-size-reader'); //modulo que sirve para conocer el ancho y el largo de una imagen.
const app=express();
const port=8080;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/croppie', express.static(__dirname + '/node_modules/croppie'));

app.get('/', (req, res)=>{
  res.sendFile(route+'/index.html'); //route es el resto de la ruta! Sustituirla
});

app.post('/upload-photo', upload.single('foto'), async (req, res)=>{
  res.json({message: 'Exito!'});
});

app.listen(port, ()=>{
  console.log("Servidor iniciado en el puerto 8080");
});
