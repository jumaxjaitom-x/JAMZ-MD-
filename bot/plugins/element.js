export default {
    name: 'element',
    alias: [],
    desc: 'element command',
    category: 'search',
    usage: 'element',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command element is active.' }, { quoted: msg });
    }
};
