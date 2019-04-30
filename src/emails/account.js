const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
            to: email,
            from: 'actimel333@gmail.com',
            subject: 'Thank you for joining!',
            text: `Welcome to the app, ${ name }! Let me know how you get along with the app`
    })
};

const sendCanceletionEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'actimel333@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, I hope to sse you some time soon ${ name }!`
    })
};

module.exports = {
    sendWelcomeEmail,
    sendCanceletionEmail
};
