export default {
    name: 'string',
    alias: [],
    desc: 'string command',
    category: 'info',
    usage: 'string',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command string is active.' }, { quoted: msg });
    }
};
