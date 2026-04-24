export default {
    name: 'quran',
    alias: [],
    desc: 'quran command',
    category: 'info',
    usage: 'quran',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command quran is active.' }, { quoted: msg });
    }
};
