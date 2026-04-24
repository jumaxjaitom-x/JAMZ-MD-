export default {
    name: 'stickers',
    alias: [],
    desc: 'stickers command',
    category: 'stickers',
    usage: 'stickers',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command stickers is active.' }, { quoted: msg });
    }
};
