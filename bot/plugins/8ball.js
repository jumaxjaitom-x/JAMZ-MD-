export default {
    name: '8ball',
    alias: [],
    desc: '8ball command',
    category: 'fun',
    usage: '8ball',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command 8ball is active.' }, { quoted: msg });
    }
};
