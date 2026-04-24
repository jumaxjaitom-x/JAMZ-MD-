export default {
    name: 'ttstalk',
    alias: [],
    desc: 'ttstalk command',
    category: 'stalk',
    usage: 'ttstalk',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command ttstalk is active.' }, { quoted: msg });
    }
};
