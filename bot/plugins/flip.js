export default {
    name: 'flip',
    alias: [],
    desc: 'flip command',
    category: 'tools',
    usage: 'flip',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command flip is active.' }, { quoted: msg });
    }
};
