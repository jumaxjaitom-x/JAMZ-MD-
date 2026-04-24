export default {
    name: 'ban',
    alias: [],
    desc: 'ban command',
    category: 'admin',
    usage: 'ban',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command ban is active.' }, { quoted: msg });
    }
};
