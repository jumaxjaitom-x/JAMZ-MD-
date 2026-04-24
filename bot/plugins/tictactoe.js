export default {
    name: 'tictactoe',
    alias: [],
    desc: 'tictactoe command',
    category: 'games',
    usage: 'tictactoe',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tictactoe is active.' }, { quoted: msg });
    }
};
