export default {
    name: 'compliment',
    alias: [],
    desc: 'compliment command',
    category: 'group',
    usage: 'compliment',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command compliment is active.' }, { quoted: msg });
    }
};
