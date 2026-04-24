export default {
    name: 'calc',
    alias: [],
    desc: 'calc command',
    category: 'utility',
    usage: 'calc',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command calc is active.' }, { quoted: msg });
    }
};
