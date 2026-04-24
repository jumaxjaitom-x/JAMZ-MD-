export default {
    name: 'quax',
    alias: [],
    desc: 'quax command',
    category: 'upload',
    usage: 'quax',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command quax is active.' }, { quoted: msg });
    }
};
