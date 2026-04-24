export default {
    name: 'schedulelist',
    alias: [],
    desc: 'schedulelist command',
    category: 'utility',
    usage: 'schedulelist',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command schedulelist is active.' }, { quoted: msg });
    }
};
