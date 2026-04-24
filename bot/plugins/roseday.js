export default {
    name: 'roseday',
    alias: [],
    desc: 'roseday command',
    category: 'quotes',
    usage: 'roseday',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command roseday is active.' }, { quoted: msg });
    }
};
