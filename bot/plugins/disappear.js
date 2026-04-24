export default {
    name: 'disappear',
    alias: [],
    desc: 'disappear command',
    category: 'admin',
    usage: 'disappear',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command disappear is active.' }, { quoted: msg });
    }
};
