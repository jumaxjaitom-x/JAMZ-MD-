export default {
    name: 'scloud',
    alias: [],
    desc: 'scloud command',
    category: 'music',
    usage: 'scloud',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command scloud is active.' }, { quoted: msg });
    }
};
