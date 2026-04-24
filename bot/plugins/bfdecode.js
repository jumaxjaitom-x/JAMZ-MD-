export default {
    name: 'bfdecode',
    alias: [],
    desc: 'bfdecode command',
    category: 'tools',
    usage: 'bfdecode',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command bfdecode is active.' }, { quoted: msg });
    }
};
