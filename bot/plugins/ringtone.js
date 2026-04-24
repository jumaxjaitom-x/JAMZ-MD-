export default {
    name: 'ringtone',
    alias: [],
    desc: 'ringtone command',
    category: 'music',
    usage: 'ringtone',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command ringtone is active.' }, { quoted: msg });
    }
};
