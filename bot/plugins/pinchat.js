export default {
    name: 'pinchat',
    alias: ['pin'],
    desc: 'Pin the current chat.',
    category: 'owner',
    usage: 'pinchat',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        try {
            await sock.chatModify({ pin: true }, msg.key.remoteJid);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Chat pinned.' }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to pin chat.' }, { quoted: msg });
        }
    }
};
