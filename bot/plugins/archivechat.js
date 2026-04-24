export default {
    name: 'archivechat',
    alias: ['archive'],
    desc: 'Archive the current chat.',
    category: 'owner',
    usage: 'archivechat',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        try {
            await sock.chatModify({ archive: true }, msg.key.remoteJid);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Chat archived.' }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to archive chat.' }, { quoted: msg });
        }
    }
};
