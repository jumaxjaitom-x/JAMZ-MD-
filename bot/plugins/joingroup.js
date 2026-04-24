export default {
    name: 'joingroup',
    alias: ['join'],
    desc: 'Join a group using an invite link.',
    category: 'owner',
    usage: 'joingroup [link]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a group invite link.' }, { quoted: msg });

        const inviteCode = text.split('chat.whatsapp.com/')[1];
        if (!inviteCode) return sock.sendMessage(msg.key.remoteJid, { text: 'Invalid invite link.' }, { quoted: msg });

        try {
            await sock.groupAcceptInvite(inviteCode);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Joined group successfully!' }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to join group. Make sure the link is valid and I am not banned.' }, { quoted: msg });
        }
    }
};
