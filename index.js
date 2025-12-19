const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: false }
});

client.on('qr', qr => console.log('QR'));
client.on('authenticated', () => console.log('AUTH'));
client.on('ready', () => {
    console.log('READY');
    console.log(client.info);
});

client.initialize();
