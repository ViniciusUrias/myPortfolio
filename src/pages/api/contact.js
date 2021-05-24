  
export default function (req, res) {

    let nodemailer = require('nodemailer')
    require('dotenv').config()
    const pw = process.env.pw
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'viniciusuriasdeabreu@gmail.com',
              pass: pw,
           },
      secure: true,
    });
    
    const mailData = {
        from: `${req.body.mailForm}`,
        to: 'viniciusuriasdeabreu@gmail.com',
        subject: `Message From ${req.body.mailForm}`,
        text: req.body.mailMsg + " | Sent from: " + req.body.mailForm,
       
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }

