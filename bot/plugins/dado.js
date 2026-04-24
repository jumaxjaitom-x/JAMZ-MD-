export default {
    name: 'dado',
    alias: [],
    desc: 'dado command',
    category: 'games',
    usage: 'dado',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command dado is active.' }, { quoted: msg });
    }
};
