export default {
    name: 'sticker2',
    alias: [],
    desc: 'sticker2 command',
    category: 'stickers',
    usage: 'sticker2',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command sticker2 is active.' }, { quoted: msg });
    }
};
