export default {
    name: 'trivia',
    alias: [],
    desc: 'trivia command',
    category: 'games',
    usage: 'trivia',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command trivia is active.' }, { quoted: msg });
    }
};
