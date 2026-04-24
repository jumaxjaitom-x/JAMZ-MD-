export default {
    name: 'resetlink',
    alias: [],
    desc: 'resetlink command',
    category: 'admin',
    usage: 'resetlink',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command resetlink is active.' }, { quoted: msg });
    }
};
