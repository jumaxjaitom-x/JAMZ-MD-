export default {
    name: 'emojimix',
    alias: [],
    desc: 'emojimix command',
    category: 'stickers',
    usage: 'emojimix',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command emojimix is active.' }, { quoted: msg });
    }
};
