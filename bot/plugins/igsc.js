export default {
    name: 'igsc',
    alias: [],
    desc: 'igsc command',
    category: 'stickers',
    usage: 'igsc',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command igsc is active.' }, { quoted: msg });
    }
};
