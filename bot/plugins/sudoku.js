export default {
    name: 'sudoku',
    alias: [],
    desc: 'sudoku command',
    category: 'utility',
    usage: 'sudoku',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command sudoku is active.' }, { quoted: msg });
    }
};
