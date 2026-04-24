export default {
    name: 'wordcloud',
    alias: [],
    desc: 'wordcloud command',
    category: 'utility',
    usage: 'wordcloud',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command wordcloud is active.' }, { quoted: msg });
    }
};
