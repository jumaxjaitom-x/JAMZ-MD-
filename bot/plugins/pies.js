export default {
    name: 'pies',
    alias: [],
    desc: 'pies command',
    category: 'images',
    usage: 'pies',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command pies is active.' }, { quoted: msg });
    }
};
