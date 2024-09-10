import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser"
import router from './routes/Routes.js';
import multer from 'multer';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use(router);


// Upload poster images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client-ui/public/uploads'); // Specify upload folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Add a unique name
  }
});
const upload = multer({ storage })

app.post('/upload', upload.single('img'), (req, res) => { // 'img' is the key
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const imgPath = `/uploads/${req.file.filename}`; // File path
  res.status(200).json({ img: imgPath }); // Return the image path
});

app.listen(5000, ()=>{
    console.log('Connection Successful')
}) 