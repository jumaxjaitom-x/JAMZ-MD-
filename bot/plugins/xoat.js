export default {
    name: 'xoat',
    alias: [],
    desc: 'xoat command',
    category: 'upload',
    usage: 'xoat',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command xoat is active.' }, { quoted: msg });
    }
};
