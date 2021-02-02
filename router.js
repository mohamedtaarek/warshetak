const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({extended:false});
// const jsonParser = bodyParser.json();
const orderService = require('./routes/order');


//render views on calling it
router.get('/',(req,res)=>renderPage('home',res));

router.get('/submitted',(req,res)=>renderPage('submitted',res));

//backEnd handeling
router.post('/order',urlParser,orderService.handleOrder);

const renderPage = (view, res) => {
    const page = path.join(__dirname, 'views', `${view}.html`);
    res.sendFile(page);
};

module.exports = router;