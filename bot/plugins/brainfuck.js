export default {
    name: 'brainfuck',
    alias: [],
    desc: 'brainfuck command',
    category: 'tools',
    usage: 'brainfuck',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command brainfuck is active.' }, { quoted: msg });
    }
};
