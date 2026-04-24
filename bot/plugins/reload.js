export default {
    name: 'reload',
    alias: ['restart'],
    desc: 'Reload the bot.',
    category: 'owner',
    usage: 'reload',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        await sock.sendMessage(msg.key.remoteJid, { text: 'Bot is reloading...' }, { quoted: msg });
        process.exit(0);
    }
};
