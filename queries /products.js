const db = require('./db/dbConfig.js')

const getAllProducts = async () => {
    try {
        let products = await db.any("SELECT * FROM products")
        return products
    } catch(error) {
        return error
    }
}

const getOneProduct = async (productId) => {

    try {
        let product = await db.oneOrNone("SELECT * FROM products WHERE id=$1", productId)
        return product
    } catch(error) {
        return error
    }
}

const createOneProduct = async () => {
    const {name, price, brand, model, description, condition} = body
    try{
        const product = await db.one("INSERT INTO products (name, price, brand, model, description, condition) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",[
            data.name,
            data.price,
            data.brand,
            data.model,
            data.description,
            data.condition,
        ])
        return product
    }catch (error){
        return error
    }
}

const updateOneProduct = async () => {
    try {
        let updatedProduct = await db.oneOrNone( "UPDATE products SET name=$1, price=$2, floor=$3 WHERE meeting_room_id=$4 RETURNING *",)
    } catch(error) {
        
    }
}

const deleteOneProduct = async () => {
    try {

    } catch(error) {
        
    }
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createOneProduct,
    updateOneProduct,
    deleteOneProduct
};