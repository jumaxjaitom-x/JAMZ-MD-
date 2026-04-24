export default {
    name: 'islamic',
    alias: [],
    desc: 'islamic command',
    category: 'images',
    usage: 'islamic',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command islamic is active.' }, { quoted: msg });
    }
};
