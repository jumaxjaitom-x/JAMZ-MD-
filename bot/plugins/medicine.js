export default {
    name: 'medicine',
    alias: [],
    desc: 'medicine command',
    category: 'info',
    usage: 'medicine',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command medicine is active.' }, { quoted: msg });
    }
};
