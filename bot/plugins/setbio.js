export default {
    name: 'setbio',
    alias: ['setstatus'],
    desc: 'Set bot bio/status.',
    category: 'owner',
    usage: 'setbio [text]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a bio text.' }, { quoted: msg });

        try {
            await sock.updateProfileStatus(text);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Bio updated successfully!' }, { quoted: msg });
        } catch (error) {
            console.error(error);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to update bio.' }, { quoted: msg });
        }
    }
};
