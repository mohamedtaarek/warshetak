const nodemailer = require("nodemailer");
const email = require("../config");

const sendMail = (target,content,html)=>{
    
    var transporter = nodemailer.createTransport({
        host: email.host,
        port: 465,
        secureConnection: true,
        auth: {
          user: email.mail, 
          pass: email.pass 
        }
      });

    var mailOptions = {
        from : email.mail,
        to : target,
        subject: "Warshetak",
        text: content,
        html: html,

    };

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log("error sending mail: " + err);
        }else{
            console.log("email sent succsesfuly: " + info.response );
        }
    });

};

module.exports = {sendMail};
