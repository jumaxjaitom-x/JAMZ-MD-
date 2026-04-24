export default {
    name: 'cipher',
    alias: [],
    desc: 'cipher command',
    category: 'utility',
    usage: 'cipher',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command cipher is active.' }, { quoted: msg });
    }
};
