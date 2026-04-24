export default {
    name: 'attp',
    alias: [],
    desc: 'attp command',
    category: 'stickers',
    usage: 'attp',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command attp is active.' }, { quoted: msg });
    }
};
