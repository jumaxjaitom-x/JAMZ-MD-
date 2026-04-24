export default {
    name: 'cyberimg',
    alias: [],
    desc: 'cyberimg command',
    category: 'images',
    usage: 'cyberimg',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command cyberimg is active.' }, { quoted: msg });
    }
};
