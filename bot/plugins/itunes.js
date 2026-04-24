export default {
    name: 'itunes',
    alias: [],
    desc: 'itunes command',
    category: 'info',
    usage: 'itunes',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command itunes is active.' }, { quoted: msg });
    }
};
