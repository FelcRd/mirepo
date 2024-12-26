const express = require('express');
const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Arreglo en memoria para almacenar productos
let products = [];
let currentId = 1;

// POST /products: Agregar un nuevo producto
app.post('/products', (req, res) => {
    const { name, price, category } = req.body;

    if (!name || !price || !category) {
        return res.status(400).json({ error: "Todos los campos (name, price, category) son requeridos." });
    }

    const newProduct = { id: currentId++, name, price, category };
    products.push(newProduct);

    res.status(201).json({
        message: "Producto agregado exitosamente.",
        productId: newProduct.id
    });
});

// GET /products: Obtener todos los productos
app.get('/products', (req, res) => {
    res.json(products);
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`API REST ejecutándose en http://localhost:${port}`);
});