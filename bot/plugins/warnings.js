export default {
    name: 'warnings',
    alias: [],
    desc: 'warnings command',
    category: 'group',
    usage: 'warnings',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command warnings is active.' }, { quoted: msg });
    }
};
