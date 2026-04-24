export default {
    name: 'pair',
    alias: [],
    desc: 'pair command',
    category: 'general',
    usage: 'pair',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command pair is active.' }, { quoted: msg });
    }
};
