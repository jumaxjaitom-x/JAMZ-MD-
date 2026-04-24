export default {
    name: 'pinstalk',
    alias: [],
    desc: 'pinstalk command',
    category: 'stalk',
    usage: 'pinstalk',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command pinstalk is active.' }, { quoted: msg });
    }
};
