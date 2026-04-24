export default {
    name: 'play',
    alias: [],
    desc: 'play command',
    category: 'music',
    usage: 'play',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command play is active.' }, { quoted: msg });
    }
};
