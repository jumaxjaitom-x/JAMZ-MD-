export default {
    name: 'insult',
    alias: [],
    desc: 'insult command',
    category: 'group',
    usage: 'insult',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command insult is active.' }, { quoted: msg });
    }
};
