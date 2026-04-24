export default {
    name: 'chatbot',
    alias: [],
    desc: 'chatbot command',
    category: 'admin',
    usage: 'chatbot',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command chatbot is active.' }, { quoted: msg });
    }
};
