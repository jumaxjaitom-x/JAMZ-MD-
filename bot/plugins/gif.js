export default {
    name: 'gif',
    alias: [],
    desc: 'gif command',
    category: 'stickers',
    usage: 'gif',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command gif is active.' }, { quoted: msg });
    }
};
