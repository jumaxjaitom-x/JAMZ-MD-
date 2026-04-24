export default {
    name: 'add',
    alias: [],
    desc: 'add command',
    category: 'admin',
    usage: 'add',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command add is active.' }, { quoted: msg });
    }
};
