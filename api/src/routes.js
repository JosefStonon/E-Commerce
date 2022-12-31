
const path = require('node:path');
const multer = require('multer');
const {Router} = require('express');

// importação do ProductControler, arquivo que controla contato com o mongodb.
const ProductControler = require('./Controlers/ProductControler');

const routes = Router();

//Teste do servidor criado
routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is on..." });
});

//add imagens na raiz do prejeto pelo multer
const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, callback) {
        callback(null, path.resolve(__dirname, '..', 'uploads'));
      },
      filename(req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
      },
    }),
});

routes.post('/products', upload.single('image'), ProductControler.store);
routes.get('/products', ProductControler.index);
routes.get('/products/:id', ProductControler.show);
routes.put('/products/:id', ProductControler.update);
routes.delete('/products/:id', ProductControler.destroy);
module.exports = routes;