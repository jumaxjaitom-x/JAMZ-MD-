export default {
    name: 'quoted',
    alias: [],
    desc: 'quoted command',
    category: 'stickers',
    usage: 'quoted',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command quoted is active.' }, { quoted: msg });
    }
};
