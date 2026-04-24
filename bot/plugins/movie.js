export default {
    name: 'movie',
    alias: [],
    desc: 'movie command',
    category: 'info',
    usage: 'movie',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command movie is active.' }, { quoted: msg });
    }
};
