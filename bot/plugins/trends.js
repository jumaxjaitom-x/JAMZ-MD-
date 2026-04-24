export default {
    name: 'trends',
    alias: [],
    desc: 'trends command',
    category: 'info',
    usage: 'trends',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command trends is active.' }, { quoted: msg });
    }
};
