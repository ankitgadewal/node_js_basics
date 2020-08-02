var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ankitgadewal.84@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'ankitgadewal.84@gmail.com',
  to: 'ankitgadewal14@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 