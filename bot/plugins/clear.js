export default {
    name: 'clear',
    alias: ['clearall'],
    desc: 'Clear all messages in the current chat.',
    category: 'owner',
    usage: 'clear',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        try {
            await sock.chatModify({ delete: true, lastMessages: [{ key: msg.key, messageTimestamp: msg.messageTimestamp }] }, msg.key.remoteJid);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Chat cleared.' }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to clear chat.' }, { quoted: msg });
        }
    }
};
