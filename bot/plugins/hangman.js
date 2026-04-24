export default {
    name: 'hangman',
    alias: [],
    desc: 'hangman command',
    category: 'games',
    usage: 'hangman',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command hangman is active.' }, { quoted: msg });
    }
};
