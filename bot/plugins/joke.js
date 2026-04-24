export default {
    name: 'joke',
    alias: [],
    desc: 'joke command',
    category: 'fun',
    usage: 'joke',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command joke is active.' }, { quoted: msg });
    }
};
