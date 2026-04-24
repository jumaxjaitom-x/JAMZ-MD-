export default {
    name: 'broadcast',
    alias: ['bc'],
    desc: 'Broadcast a message to all chats.',
    category: 'owner',
    usage: 'broadcast [text]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a message to broadcast.' }, { quoted: msg });

        const chats = await sock.groupFetchAllParticipating();
        const groups = Object.keys(chats);
        
        await sock.sendMessage(msg.key.remoteJid, { text: `Broadcasting to ${groups.length} groups...` }, { quoted: msg });

        for (const id of groups) {
            await sock.sendMessage(id, { text: `*──［ BROADCAST ］──*\n\n${text}` });
        }

        await sock.sendMessage(msg.key.remoteJid, { text: 'Broadcast completed.' }, { quoted: msg });
    }
};
