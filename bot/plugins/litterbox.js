export default {
    name: 'litterbox',
    alias: [],
    desc: 'litterbox command',
    category: 'upload',
    usage: 'litterbox',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command litterbox is active.' }, { quoted: msg });
    }
};
