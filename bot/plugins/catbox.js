export default {
    name: 'catbox',
    alias: [],
    desc: 'catbox command',
    category: 'upload',
    usage: 'catbox',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command catbox is active.' }, { quoted: msg });
    }
};
