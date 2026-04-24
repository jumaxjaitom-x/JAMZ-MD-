export default {
    name: 'coding',
    alias: [],
    desc: 'coding command',
    category: 'images',
    usage: 'coding',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command coding is active.' }, { quoted: msg });
    }
};
