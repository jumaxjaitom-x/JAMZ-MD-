export default {
    name: 'removebg',
    alias: [],
    desc: 'removebg command',
    category: 'tools',
    usage: 'removebg',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command removebg is active.' }, { quoted: msg });
    }
};
