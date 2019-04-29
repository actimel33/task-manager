const sendgridAPIKey = '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';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendgridAPIKey);

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
