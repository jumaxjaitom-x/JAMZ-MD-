export default {
    name: 'invert',
    alias: [],
    desc: 'invert command',
    category: 'tools',
    usage: 'invert',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command invert is active.' }, { quoted: msg });
    }
};
