export default {
    name: 'why',
    alias: [],
    desc: 'why command',
    category: 'fun',
    usage: 'why',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command why is active.' }, { quoted: msg });
    }
};
