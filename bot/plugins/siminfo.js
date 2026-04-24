export default {
    name: 'siminfo',
    alias: [],
    desc: 'siminfo command',
    category: 'utility',
    usage: 'siminfo',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command siminfo is active.' }, { quoted: msg });
    }
};
