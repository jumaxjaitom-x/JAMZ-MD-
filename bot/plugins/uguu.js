export default {
    name: 'uguu',
    alias: [],
    desc: 'uguu command',
    category: 'upload',
    usage: 'uguu',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command uguu is active.' }, { quoted: msg });
    }
};
