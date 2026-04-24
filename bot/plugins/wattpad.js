export default {
    name: 'wattpad',
    alias: [],
    desc: 'wattpad command',
    category: 'search',
    usage: 'wattpad',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command wattpad is active.' }, { quoted: msg });
    }
};
