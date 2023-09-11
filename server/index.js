import express from 'express'
import path from 'path'

const app = express();

// app.use(express.static(path.join(__dirname, '../client/build')));


app.get('/hello',(req,res)=>{
     res.json({msg: 'hello world!'});
});


app.listen(8080, () => {
    console.log('Server started!');
});


