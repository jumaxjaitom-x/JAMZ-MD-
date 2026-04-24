export default {
    name: 'pingweb',
    alias: [],
    desc: 'pingweb command',
    category: 'general',
    usage: 'pingweb',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command pingweb is active.' }, { quoted: msg });
    }
};
