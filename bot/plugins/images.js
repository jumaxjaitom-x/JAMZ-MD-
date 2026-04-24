export default {
    name: 'images',
    alias: [],
    desc: 'images command',
    category: 'menu',
    usage: 'images',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command images is active.' }, { quoted: msg });
    }
};
