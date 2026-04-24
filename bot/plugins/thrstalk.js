export default {
    name: 'thrstalk',
    alias: [],
    desc: 'thrstalk command',
    category: 'stalk',
    usage: 'thrstalk',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command thrstalk is active.' }, { quoted: msg });
    }
};
