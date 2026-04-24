export default {
    name: 'schedule',
    alias: [],
    desc: 'schedule command',
    category: 'utility',
    usage: 'schedule',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command schedule is active.' }, { quoted: msg });
    }
};
