const express=require('express');
const app=express();
app.get('/',function(request,response){
    response.send("hello world" + "<h1>This is H1</h1>")
})
app.get('/contact',function(request,response){
    response.send("contact me:9036420485")
})
app.get('/about',function(request,response){
    response.send("Hello this  page is owned by AKHIB")
})
app.listen(4000,function(){
    console.log("the server is running at 4000");
})

