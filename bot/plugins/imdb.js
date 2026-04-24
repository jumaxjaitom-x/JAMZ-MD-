export default {
    name: 'imdb',
    alias: [],
    desc: 'imdb command',
    category: 'info',
    usage: 'imdb',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command imdb is active.' }, { quoted: msg });
    }
};
