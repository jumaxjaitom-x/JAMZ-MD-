export default {
    name: 'wyr',
    alias: [],
    desc: 'wyr command',
    category: 'quotes',
    usage: 'wyr',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command wyr is active.' }, { quoted: msg });
    }
};
