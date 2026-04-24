export default {
    name: 'wasted',
    alias: [],
    desc: 'wasted command',
    category: 'group',
    usage: 'wasted',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command wasted is active.' }, { quoted: msg });
    }
};
