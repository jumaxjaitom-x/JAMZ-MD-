export default {
    name: 'igs',
    alias: [],
    desc: 'igs command',
    category: 'stickers',
    usage: 'igs',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command igs is active.' }, { quoted: msg });
    }
};
