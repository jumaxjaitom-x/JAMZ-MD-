export default {
    name: 'ytsearch',
    alias: [],
    desc: 'ytsearch command',
    category: 'music',
    usage: 'ytsearch',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command ytsearch is active.' }, { quoted: msg });
    }
};
