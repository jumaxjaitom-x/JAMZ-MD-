export default {
    name: 'uptime',
    alias: [],
    desc: 'uptime command',
    category: 'general',
    usage: 'uptime',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command uptime is active.' }, { quoted: msg });
    }
};
