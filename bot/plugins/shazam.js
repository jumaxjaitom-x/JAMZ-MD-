export default {
    name: 'shazam',
    alias: [],
    desc: 'shazam command',
    category: 'info',
    usage: 'shazam',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command shazam is active.' }, { quoted: msg });
    }
};
