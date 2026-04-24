export default {
    name: 'setgname',
    alias: [],
    desc: 'setgname command',
    category: 'admin',
    usage: 'setgname',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command setgname is active.' }, { quoted: msg });
    }
};
