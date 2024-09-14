/*Connectivity*/

//imports for express//
const express = require('express');

//creates an express app instance//
const app = express();

//import the database (sql)
const db = require('./db/dbConfig');

//import the product file
const productsController = require('./controllers/productsController')
//sets up MIDDLEWARE to PARSE incoming requests from the front end to the back end.
//express.json is a built in middleware function that parses incoming requests with 
//JSON payloads (req.body)
app.use(express.json());
app.use('/products', productsController)
/*validations*/
// Purpose: This middleware function is used to validate that a given id parameter in the request URL is valid.
// Logging: console.log("Testing middleware!"); logs a message to the console whenever this middleware function is called. This is useful for debugging purposes.
// Extracting id: let id = req.params.id; retrieves the id parameter from the URL of the incoming request. For example, if the request URL is /products/3, req.params.id would be 3.
// Validation Check: The if statement checks if the id is within a valid range (id >= 0 && id < products.length). Here, products.length represents the total number of products in an array called products. The condition ensures the id is non-negative and less than the total number of products.
// If the id is valid, next() is called to pass control to the next middleware function or route handler.
// Error Handling: If the id is not valid, the middleware sends a 404 (Not Found) response with a message indicating that the provided id is invalid.
function validateId(req, res, next) {
    console.log("Testing middleware!")

    let id = req.params.id
    if (id >= 0 && id < products.length) {
        return next()
    }

    res.status(404).send(`The id, ${id}, you have sent us is invalid!!`)
}
// Purpose: This middleware function is used to validate that the request body contains all the necessary fields for creating or updating a product.
// Extracting Request Body: let body = req.body; retrieves the body of the incoming request. The request body is typically in JSON format and contains data sent by the client, such as { "name": "Product A", "price": 100, "brand": "Brand X", "model": "Model Y", "description": "A sample product" }.
// Validation Check: The if statement checks that all required fields (name, price, brand, model, description) are present in the request body.
// If all fields are present, next() is called to pass control to the next middleware function or route handler.
// Error Handling: If any required field is missing, the middleware sends a 400 (Bad Request) response with a message indicating that some information is missing from the request body.
function validateBody (req, res, next) {
    let body = req.body

    if (body.name && body.price && body.brand && body.model && body.description) {
        return next()
    }

    res.status(400).send("Youre missing some information from your body")
}

// array of objects (products)
let products = [
    {
        name: "Gibson les paul 4 sale",
        price: 50000,
        brand: "Gibson",
        model: "les paul",
        description: "Selling my grandfathers gibson from the 50's. I know what i have!!!"
    },
    {
        name: "old ibanez",
        price: 500,
        brand: "Ibanez",
        model: "LMDO9039880",
        description: "Selling my first guitar"
    },
    {
        name: "Selling indoor drumming kit",
        price: 450,
        brand: "Mitchell",
        model: "ghfj98793",
        description: "Perfect for those who live in an apartment but still want to rock."
    }
]


/* Controller Use app.use('/example', example) */
app.get("/", (req, res) => {
    res.send("This is the back-end for Backend Training.")
})

app.get("*", (req, res) => {
    res.send("No such route exists.")
})



module.exports = app;

