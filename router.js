const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({extended:false});
// const jsonParser = bodyParser.json();
const orderService = require('./routes/order');
const adminService = require('./routes/admin');

//render views on calling it
router.get('/',(req,res)=>renderPage('home',res));
router.get('/login',(req,res)=>renderPage('login',res));
// router.get('/clientsview',(req,res)=>{res.render('clients');});

router.get('/submitted',(req,res)=>renderPage('submitted',res));

//backEnd handeling
router.post('/order',urlParser,orderService.handleOrder);
router.get('/clients',urlParser,adminService.getAllClients);
router.post('/clients',urlParser,adminService.postClient);
router.post('/client',urlParser,adminService.getClient);
router.post('/transaction',urlParser,adminService.getClientTransactions);
router.post('/transactions',urlParser,adminService.postTransaction);


const renderPage = (view, res) => {
    const page = path.join(__dirname, 'views', `${view}.html`);
    res.sendFile(page);
};

module.exports = router;