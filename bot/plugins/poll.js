export default {
    name: 'poll',
    alias: [],
    desc: 'poll command',
    category: 'group',
    usage: 'poll',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command poll is active.' }, { quoted: msg });
    }
};
