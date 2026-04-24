export default {
    name: 'define',
    alias: [],
    desc: 'define command',
    category: 'search',
    usage: 'define',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command define is active.' }, { quoted: msg });
    }
};
