export default {
    name: 'find',
    alias: [],
    desc: 'find command',
    category: 'general',
    usage: 'find',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command find is active.' }, { quoted: msg });
    }
};
