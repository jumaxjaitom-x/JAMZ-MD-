export default {
    name: 'reverse',
    alias: [],
    desc: 'reverse command',
    category: 'tools',
    usage: 'reverse',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command reverse is active.' }, { quoted: msg });
    }
};
