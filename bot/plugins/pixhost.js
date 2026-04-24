export default {
    name: 'pixhost',
    alias: [],
    desc: 'pixhost command',
    category: 'upload',
    usage: 'pixhost',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command pixhost is active.' }, { quoted: msg });
    }
};
