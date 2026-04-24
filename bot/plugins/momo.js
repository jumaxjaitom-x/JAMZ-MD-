export default {
    name: 'momo',
    alias: [],
    desc: 'momo command',
    category: 'info',
    usage: 'momo',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command momo is active.' }, { quoted: msg });
    }
};
