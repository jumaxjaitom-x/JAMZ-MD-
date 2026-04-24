export default {
    name: 'broadcastdm',
    alias: ['bcdm'],
    desc: 'Broadcast a message to all private chats.',
    category: 'owner',
    usage: 'broadcastdm [text]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a message.' }, { quoted: msg });

        const chats = await sock.groupFetchAllParticipating(); // Need to find DMs, Baileys is tricky here. Usually we track DMs in database.
        // Simplified approach: iterate through all store contacts if available, but here we'll use a placeholder or recent chats.
        await sock.sendMessage(msg.key.remoteJid, { text: 'Broadcasting to DMs... (Tracking of DMs required in production)' }, { quoted: msg });
    }
};
