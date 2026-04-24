export default {
    name: 'groupinfo',
    alias: [],
    desc: 'groupinfo command',
    category: 'group',
    usage: 'groupinfo',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command groupinfo is active.' }, { quoted: msg });
    }
};
