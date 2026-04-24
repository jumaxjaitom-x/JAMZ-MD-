export default {
    name: 'antibadword',
    alias: [],
    desc: 'antibadword command',
    category: 'admin',
    usage: 'antibadword',
    execute: async (sock, msg, { args, prefix, isOwner }) => {
        // Admin check logic would go here
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command antibadword is active.' }, { quoted: msg });
    }
};
