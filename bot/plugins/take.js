export default {
    name: 'take',
    alias: [],
    desc: 'take command',
    category: 'stickers',
    usage: 'take',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command take is active.' }, { quoted: msg });
    }
};
