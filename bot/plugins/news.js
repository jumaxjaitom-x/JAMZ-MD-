export default {
    name: 'news',
    alias: [],
    desc: 'news command',
    category: 'info',
    usage: 'news',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command news is active.' }, { quoted: msg });
    }
};
