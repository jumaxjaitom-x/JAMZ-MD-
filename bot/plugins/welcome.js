export default {
    name: 'welcome',
    alias: [],
    desc: 'welcome command',
    category: 'admin',
    usage: 'welcome',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command welcome is active.' }, { quoted: msg });
    }
};
