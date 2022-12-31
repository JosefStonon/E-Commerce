const ProductModel = require('../Models/ProductModels');

class ProductControler {
    async store(req, res) {
        const { title, description, price } = req.body;

        const productAlreadyExists = await ProductModel.findOne({ title });

            //para nao criar produto repetido
            if(productAlreadyExists) {
                return res.status(400).json({ message: "This name already exists"});
            }

            //para nao deixar campo vazio
            if (!title || !description || !price) {
                return res.status(400).json({ message: "title, description and price is not defined"});
            }

            //para criar um novo produto com base no array de produtos
            const createdProduct = await ProductModel.create(req.body);
            return res.status(200).json(createdProduct);
    }

    async index(req, res) {
        const products = await ProductModel.find();
        return res.status(200).json(products);
    }

    async show(req, res) {
    try {
        const {id} = req.params;
        const product =await ProductModel.findById(id);
            if (!product) {
                return res.status(404).json({ message: "Product does not exists"});
            }

            return res.status(200).json(product);
    } catch (error) {
        return res.status(404).json({ message: "Failed to list product"})
    }
    }

    async update(req, res) {
     try {
        const { id } = req.params;
        await ProductModel.findByIdAndUpdate(id, req.body);

        return res.status(200).json({message: "Product update"})
    } catch (error) {
        return res.status(404).json({ message: "Failed to update product"})
    }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
        const productDeleted = await ProductModel.findByIdAndDelete(id);
            if (!productDeleted) {
                return res.status(404).json({ message: "Product does not exist"});
            }

            return res.status(200).json({ messege: "Product deleted" });
        } catch (error) {
            return res.status(404).json({ message: "Failed to delete product"})
        }
    }

}

module.exports = new ProductControler();