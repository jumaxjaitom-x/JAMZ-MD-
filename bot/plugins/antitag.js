export default {
    name: 'antitag',
    alias: [],
    desc: 'antitag command',
    category: 'admin',
    usage: 'antitag',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command antitag is active.' }, { quoted: msg });
    }
};
