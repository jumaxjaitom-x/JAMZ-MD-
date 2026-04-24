export default {
    name: 'schedulecancel',
    alias: [],
    desc: 'schedulecancel command',
    category: 'utility',
    usage: 'schedulecancel',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command schedulecancel is active.' }, { quoted: msg });
    }
};
