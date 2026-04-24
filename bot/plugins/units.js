export default {
    name: 'units',
    alias: [],
    desc: 'units command',
    category: 'utility',
    usage: 'units',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command units is active.' }, { quoted: msg });
    }
};
