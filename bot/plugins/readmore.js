export default {
    name: 'readmore',
    alias: [],
    desc: 'readmore command',
    category: 'tools',
    usage: 'readmore',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command readmore is active.' }, { quoted: msg });
    }
};
