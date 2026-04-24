export default {
    name: 'antilink',
    alias: [],
    desc: 'antilink command',
    category: 'admin',
    usage: 'antilink',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command antilink is active.' }, { quoted: msg });
    }
};
