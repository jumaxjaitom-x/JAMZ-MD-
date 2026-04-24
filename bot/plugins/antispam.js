export default {
    name: 'antispam',
    alias: [],
    desc: 'antispam command',
    category: 'admin',
    usage: 'antispam',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command antispam is active.' }, { quoted: msg });
    }
};
