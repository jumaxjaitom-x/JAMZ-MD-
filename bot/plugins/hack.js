export default {
    name: 'hack',
    alias: [],
    desc: 'hack command',
    category: 'fun',
    usage: 'hack',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command hack is active.' }, { quoted: msg });
    }
};
