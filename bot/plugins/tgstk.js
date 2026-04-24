export default {
    name: 'tgstk',
    alias: [],
    desc: 'tgstk command',
    category: 'stickers',
    usage: 'tgstk',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tgstk is active.' }, { quoted: msg });
    }
};
