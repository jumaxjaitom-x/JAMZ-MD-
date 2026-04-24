export default {
    name: 'song',
    alias: [],
    desc: 'song command',
    category: 'music',
    usage: 'song',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command song is active.' }, { quoted: msg });
    }
};
