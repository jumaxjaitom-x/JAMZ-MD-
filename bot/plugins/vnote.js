export default {
    name: 'vnote',
    alias: [],
    desc: 'vnote command',
    category: 'tools',
    usage: 'vnote',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command vnote is active.' }, { quoted: msg });
    }
};
