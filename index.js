const express = require('express');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
})

app.post("/test", (req, res) => {
    const obj = req.body;
    console.log("log ==>", obj, new Date());
    return res.status(200).json({success: true, message: "New log received"})
})
app.listen(3000, console.log("Server started on port 3000"));

// (async () => {
//     const tunnel = await lt({ port: 3000 });
//     console.log("tunnel url ==>", tunnel.url);
// })();