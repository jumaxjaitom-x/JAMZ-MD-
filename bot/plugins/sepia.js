export default {
    name: 'sepia',
    alias: [],
    desc: 'sepia command',
    category: 'tools',
    usage: 'sepia',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command sepia is active.' }, { quoted: msg });
    }
};
