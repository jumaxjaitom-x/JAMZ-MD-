export default {
    name: 'grayscale',
    alias: [],
    desc: 'grayscale command',
    category: 'tools',
    usage: 'grayscale',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command grayscale is active.' }, { quoted: msg });
    }
};
