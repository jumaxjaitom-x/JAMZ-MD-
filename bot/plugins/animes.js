export default {
    name: 'animes',
    alias: [],
    desc: 'animes command',
    category: 'menu',
    usage: 'animes',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command animes is active.' }, { quoted: msg });
    }
};
