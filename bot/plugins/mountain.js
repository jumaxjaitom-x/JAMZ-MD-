export default {
    name: 'mountain',
    alias: [],
    desc: 'mountain command',
    category: 'images',
    usage: 'mountain',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command mountain is active.' }, { quoted: msg });
    }
};
