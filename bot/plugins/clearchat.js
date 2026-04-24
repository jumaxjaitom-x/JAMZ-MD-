export default {
    name: 'clearchat',
    alias: ['delchat'],
    desc: 'Delete the entire chat.',
    category: 'owner',
    usage: 'clearchat',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        try {
            await sock.chatModify({ delete: true }, msg.key.remoteJid);
            // No message sent back because chat is deleted
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to delete chat.' }, { quoted: msg });
        }
    }
};
