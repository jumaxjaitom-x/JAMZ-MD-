export default {
    name: 'goodbye',
    alias: [],
    desc: 'goodbye command',
    category: 'admin',
    usage: 'goodbye',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command goodbye is active.' }, { quoted: msg });
    }
};
