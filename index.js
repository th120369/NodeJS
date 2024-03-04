const express = require("express");
const app = express();
const port = 3000;
const product=[
    {
        id: "1",
        name: "San pham 1",
        price: 123
    },
    {
        id: "2",
        name: "San pham 1",
        price: 123
    },
    {
        id: "3",
        name: "San pham 1",
        price: 123
    },

]
app.get('/', (req,res)=>{
    // res.send("<p> Hello World </p>")
    id= req.query.id
    res.send(product)
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})