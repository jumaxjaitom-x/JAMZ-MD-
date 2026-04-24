export default {
    name: 'quote2',
    alias: [],
    desc: 'quote2 command',
    category: 'quotes',
    usage: 'quote2',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command quote2 is active.' }, { quoted: msg });
    }
};
