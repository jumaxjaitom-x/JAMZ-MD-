export default {
    name: 'tinyurl',
    alias: [],
    desc: 'tinyurl command',
    category: 'tools',
    usage: 'tinyurl',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tinyurl is active.' }, { quoted: msg });
    }
};
