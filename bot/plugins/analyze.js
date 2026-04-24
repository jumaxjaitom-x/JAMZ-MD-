export default {
    name: 'analyze',
    alias: [],
    desc: 'analyze command',
    category: 'utility',
    usage: 'analyze',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command analyze is active.' }, { quoted: msg });
    }
};
