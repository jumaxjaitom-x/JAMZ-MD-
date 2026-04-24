export default {
    name: 'stupid',
    alias: [],
    desc: 'stupid command',
    category: 'group',
    usage: 'stupid',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command stupid is active.' }, { quoted: msg });
    }
};
