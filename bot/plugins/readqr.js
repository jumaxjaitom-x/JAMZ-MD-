export default {
    name: 'readqr',
    alias: [],
    desc: 'readqr command',
    category: 'tools',
    usage: 'readqr',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command readqr is active.' }, { quoted: msg });
    }
};
