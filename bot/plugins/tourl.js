export default {
    name: 'tourl',
    alias: [],
    desc: 'tourl command',
    category: 'tools',
    usage: 'tourl',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tourl is active.' }, { quoted: msg });
    }
};
