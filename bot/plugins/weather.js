export default {
    name: 'weather',
    alias: [],
    desc: 'weather command',
    category: 'info',
    usage: 'weather',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command weather is active.' }, { quoted: msg });
    }
};
