export default {
    name: 'tech',
    alias: [],
    desc: 'tech command',
    category: 'images',
    usage: 'tech',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tech is active.' }, { quoted: msg });
    }
};
