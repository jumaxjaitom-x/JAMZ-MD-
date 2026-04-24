export default {
    name: 'unban',
    alias: [],
    desc: 'unban command',
    category: 'admin',
    usage: 'unban',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command unban is active.' }, { quoted: msg });
    }
};
