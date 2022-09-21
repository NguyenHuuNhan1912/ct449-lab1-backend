// Export module với module.exports
// Import module với require function.
const express = require("express");

// Sử dụng thư viện cors để trao đổi dữ liệu chéo từ client đến server
const cors = require("cors");

// Gọi đến thư viện express và sử dụng nó
const app = express();

// Sử dụng cors
app.use(cors());

// Sử dụng express.json
app.use(express.json());

// Gọi router get
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to contact book application."
    });
})

module.exports = app;