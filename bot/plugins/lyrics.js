export default {
    name: 'lyrics',
    alias: [],
    desc: 'lyrics command',
    category: 'music',
    usage: 'lyrics',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command lyrics is active.' }, { quoted: msg });
    }
};
