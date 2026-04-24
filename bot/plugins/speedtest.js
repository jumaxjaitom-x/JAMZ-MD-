export default {
    name: 'speedtest',
    alias: [],
    desc: 'speedtest command',
    category: 'utility',
    usage: 'speedtest',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command speedtest is active.' }, { quoted: msg });
    }
};
