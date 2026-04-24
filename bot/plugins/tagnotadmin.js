export default {
    name: 'tagnotadmin',
    alias: [],
    desc: 'tagnotadmin command',
    category: 'admin',
    usage: 'tagnotadmin',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tagnotadmin is active.' }, { quoted: msg });
    }
};
