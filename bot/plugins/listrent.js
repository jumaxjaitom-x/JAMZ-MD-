export default {
    name: 'listrent',
    alias: ['rents'],
    desc: 'List all rented bot sessions.',
    category: 'owner',
    usage: 'listrent',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        // Placeholder for rented bots tracking
        await sock.sendMessage(msg.key.remoteJid, { text: 'No active rented sessions found.' }, { quoted: msg });
    }
};
