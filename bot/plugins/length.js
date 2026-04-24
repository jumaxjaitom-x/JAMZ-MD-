export default {
    name: 'length',
    alias: [],
    desc: 'length command',
    category: 'tools',
    usage: 'length',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command length is active.' }, { quoted: msg });
    }
};
