var express = require('express');
var app=express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/users', require('./routes/api/users'))

app.listen(3000, () => {
    console.log("server listening at port 3000");
})