import multer from 'multer';

const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('img', img), function (req, res) {
    res.status(200).json("Image has been uploaded")
})