const express = require("express");
const app = express();
const router = require('./router');
const PORT = 3000;


app.use(express.static(__dirname + '/views'));
app.use(router);
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Listening at port ${PORT}`);
});