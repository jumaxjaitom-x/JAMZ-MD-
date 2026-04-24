export default {
    name: 'hidetag',
    alias: [],
    desc: 'hidetag command',
    category: 'admin',
    usage: 'hidetag',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command hidetag is active.' }, { quoted: msg });
    }
};
