export default {
    name: 'star',
    alias: ['starbot'],
    desc: 'Give the bot a star (Instructions).',
    category: 'owner',
    usage: 'star',
    execute: async (sock, msg) => {
        const message = `If you like this bot, please give it a star on GitHub! 🌟\n\nhttps://github.com/jumaxjaitom-x/JAMZ-MD-`;
        await sock.sendMessage(msg.key.remoteJid, { text: message }, { quoted: msg });
    }
};
