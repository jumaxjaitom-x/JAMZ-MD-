export default {
    name: 'notes',
    alias: [],
    desc: 'notes command',
    category: 'menu',
    usage: 'notes',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command notes is active.' }, { quoted: msg });
    }
};
