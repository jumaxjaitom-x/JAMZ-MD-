export default {
    name: 'rank',
    alias: [],
    desc: 'rank command',
    category: 'group',
    usage: 'rank',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command rank is active.' }, { quoted: msg });
    }
};
