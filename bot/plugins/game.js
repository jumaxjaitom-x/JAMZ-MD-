export default {
    name: 'game',
    alias: [],
    desc: 'game command',
    category: 'images',
    usage: 'game',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command game is active.' }, { quoted: msg });
    }
};
