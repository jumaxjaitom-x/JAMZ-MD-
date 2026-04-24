export default {
    name: 'github',
    alias: [],
    desc: 'github command',
    category: 'stalk',
    usage: 'github',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command github is active.' }, { quoted: msg });
    }
};
