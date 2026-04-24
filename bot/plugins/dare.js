export default {
    name: 'dare',
    alias: [],
    desc: 'dare command',
    category: 'games',
    usage: 'dare',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command dare is active.' }, { quoted: msg });
    }
};
