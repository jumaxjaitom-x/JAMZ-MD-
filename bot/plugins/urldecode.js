export default {
    name: 'urldecode',
    alias: [],
    desc: 'urldecode command',
    category: 'utility',
    usage: 'urldecode',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command urldecode is active.' }, { quoted: msg });
    }
};
