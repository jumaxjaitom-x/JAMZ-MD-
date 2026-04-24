export default {
    name: 'truth',
    alias: [],
    desc: 'truth command',
    category: 'games',
    usage: 'truth',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command truth is active.' }, { quoted: msg });
    }
};
