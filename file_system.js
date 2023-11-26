const fs = require('fs/promises');


fs.readFile('./archivo.txt','utf-8')
    .then(text=>{
        console.log('primer texto :', text)
    })


const text2 = fs.readFile('./archivo2.txt','utf-8',(err,text)=>{
    console.log(text)
})

