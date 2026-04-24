export default {
    name: 'smenu',
    alias: [],
    desc: 'smenu command',
    category: 'general',
    usage: 'smenu',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command smenu is active.' }, { quoted: msg });
    }
};
