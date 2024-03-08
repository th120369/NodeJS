import express from "express";
const app = express();
app.use(express.json());
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
// app.get('/', (req,res)=>{
//     // res.send("<p> Hello World </p>")
//     var id= req.query.id
//     const pr = product.filter((data)=>{
//         return data.id == id
//     })
//     const key = req.query.key;
//     const cate = req.query.cate;
    
//     res.send({
//         key,
//         cate
//     })

//     // res.send(product)
//     // res.send(pr)
// })

// app.get('/post/:slug--:id.html', (req, res)=>{
//     const id = req.params.id;
//     const slug =req.params.slug;
//     res.send({id,slug});
    
// })
app.post('/posts', (req, res)=>{
    const body = req.body;
    res.send(body);
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

