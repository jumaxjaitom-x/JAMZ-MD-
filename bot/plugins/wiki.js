export default {
    name: 'wiki',
    alias: [],
    desc: 'wiki command',
    category: 'search',
    usage: 'wiki',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command wiki is active.' }, { quoted: msg });
    }
};
