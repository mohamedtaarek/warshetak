const express = require("express");
const app = express();
const router = require('./router');
const viewsRouter = require('./dataviews');
const PORT = 3000;


app.use(express.static(__dirname + '/views'));
app.use('/favicon.ico', express.static(__dirname +'resources/logo.png'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(router);
app.use(viewsRouter);
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Listening at port ${PORT}`);
});