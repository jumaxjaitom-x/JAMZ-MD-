export default {
    name: 'url',
    alias: [],
    desc: 'url command',
    category: 'tools',
    usage: 'url',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command url is active.' }, { quoted: msg });
    }
};
