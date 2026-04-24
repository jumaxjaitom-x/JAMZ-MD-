export default {
    name: 'math',
    alias: [],
    desc: 'math command',
    category: 'games',
    usage: 'math',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command math is active.' }, { quoted: msg });
    }
};
