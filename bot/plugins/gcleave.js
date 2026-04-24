export default {
    name: 'gcleave',
    alias: ['leavegc'],
    desc: 'Make the bot leave the group.',
    category: 'owner',
    usage: 'gcleave',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!msg.key.remoteJid.endsWith('@g.us')) return sock.sendMessage(msg.key.remoteJid, { text: 'This command can only be used in groups.' }, { quoted: msg });

        await sock.sendMessage(msg.key.remoteJid, { text: 'Goodbye!' });
        await sock.groupLeave(msg.key.remoteJid);
    }
};
