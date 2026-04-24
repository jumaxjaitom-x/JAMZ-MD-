export default {
    name: 'warn',
    alias: [],
    desc: 'warn command',
    category: 'admin',
    usage: 'warn',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command warn is active.' }, { quoted: msg });
    }
};
