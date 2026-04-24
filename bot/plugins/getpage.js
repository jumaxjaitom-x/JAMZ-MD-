export default {
    name: 'getpage',
    alias: [],
    desc: 'getpage command',
    category: 'tools',
    usage: 'getpage',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command getpage is active.' }, { quoted: msg });
    }
};
