export default {
    name: 'script',
    alias: [],
    desc: 'script command',
    category: 'info',
    usage: 'script',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command script is active.' }, { quoted: msg });
    }
};
