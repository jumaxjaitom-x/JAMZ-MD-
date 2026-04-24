export default {
    name: 'privacy',
    alias: [],
    desc: 'privacy command',
    category: 'menu',
    usage: 'privacy',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command privacy is active.' }, { quoted: msg });
    }
};
