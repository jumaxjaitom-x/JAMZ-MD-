export default {
    name: 'freeimage',
    alias: [],
    desc: 'freeimage command',
    category: 'upload',
    usage: 'freeimage',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command freeimage is active.' }, { quoted: msg });
    }
};
