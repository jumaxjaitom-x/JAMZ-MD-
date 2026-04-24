export default {
    name: 'audiofx',
    alias: [],
    desc: 'audiofx command',
    category: 'menu',
    usage: 'audiofx',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command audiofx is active.' }, { quoted: msg });
    }
};
