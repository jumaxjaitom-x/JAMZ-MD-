export default {
    name: 'quote',
    alias: [],
    desc: 'quote command',
    category: 'quotes',
    usage: 'quote',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command quote is active.' }, { quoted: msg });
    }
};
