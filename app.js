// Export module với module.exports
// Import module với require function.
const express = require("express");

// Sử dụng thư viện cors để trao đổi dữ liệu chéo từ client đến server
const cors = require("cors");


// Gọi đến thư viện express và sử dụng nó
const app = express();

// Import router 
const contactsRouter = require("./app/routes/contact.route");

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

// Các route quản lý liên hệ sẽ được dùng khi đường dẫn bắt đầu là /api/contacts.
app.use("/api/contacts", contactsRouter);
// handle 404 response

// handle 404 response

// define error-handling middleware last, after other app.use() and routes calls

module.exports = app;