const {sendMail} = require('../tools/mail');
const handleOrder =  (req, res) => {
    if (req.body){
        const order = {...req.body};
        if (order.name && order.number && order.mail && order.address && order.brand & order.model && order.year && order.kilos && order.comment){
        // console.log(req.body);
        // const target = order.email;
        const payload = `name: `+order.name +`\n number: `+order.number+`\n mail: `+order.mail+`\n address: `+order.address+`\n Car Brand: `+order.brand+`\n Car Model: `+order.model+`\n Model Year: `+order.year+`\n Kilos: `+order.kilos+`\n Service Required: `+order.service+`\n Client Comment:`+order.comment;
        const html = 
        `<div>
            <div><h4>name: `+order.name+`</h4></div>
            <div><h4>number: `+order.number+`</h4></div>
            <div><h4>mail: `+order.mail+`</h4></div>
            <div><h4>address: `+order.address+`</h4></div>
            <div><h4>Car Brand: `+order.brand+`</h4></div>
            <div><h4>Car Model: `+order.model+`</h4></div>
            <div><h4>Model Year: `+order.year+`</h4></div>
            <div><h4>Kilos: `+order.kilos+`</h4></div>
            <div><h4>Service Required: `+order.service+`</h4></div>
            <div><h4>Comment: `+order.comment+`</h4></div>
        </div>`;

        sendMail('my mail',payload,html);
        res.redirect('/submitted');
    }
    }else{
        res.status(400).send("bad request");
    }

};

module.exports = { handleOrder };