export default {
    name: 'tagall',
    alias: [],
    desc: 'tagall command',
    category: 'admin',
    usage: 'tagall',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tagall is active.' }, { quoted: msg });
    }
};
