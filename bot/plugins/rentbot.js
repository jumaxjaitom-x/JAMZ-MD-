export default {
    name: 'rentbot',
    alias: ['addrent'],
    desc: 'Instructions for renting the bot.',
    category: 'owner',
    usage: 'rentbot',
    execute: async (sock, msg) => {
        const message = `*JAMZ-MD Rent Service*\n\nTo rent this bot for your group, please contact the owner:\nwa.me/256706106326\n\n*Pricing:*\n- 1 Month: Free (Railway Trial)\n- Lifetime: Free`;
        await sock.sendMessage(msg.key.remoteJid, { text: message }, { quoted: msg });
    }
};
