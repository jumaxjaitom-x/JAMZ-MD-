export default {
    name: 'sticker',
    alias: [],
    desc: 'sticker command',
    category: 'stickers',
    usage: 'sticker',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command sticker is active.' }, { quoted: msg });
    }
};
