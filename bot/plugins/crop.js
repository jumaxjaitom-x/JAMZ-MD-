export default {
    name: 'crop',
    alias: [],
    desc: 'crop command',
    category: 'stickers',
    usage: 'crop',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command crop is active.' }, { quoted: msg });
    }
};
