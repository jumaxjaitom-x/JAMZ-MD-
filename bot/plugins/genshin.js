export default {
    name: 'genshin',
    alias: [],
    desc: 'genshin command',
    category: 'stalk',
    usage: 'genshin',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command genshin is active.' }, { quoted: msg });
    }
};
