export default {
    name: 'rle',
    alias: [],
    desc: 'rle command',
    category: 'utility',
    usage: 'rle',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command rle is active.' }, { quoted: msg });
    }
};
