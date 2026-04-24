export default {
    name: 'unmute',
    alias: [],
    desc: 'unmute command',
    category: 'admin',
    usage: 'unmute',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command unmute is active.' }, { quoted: msg });
    }
};
