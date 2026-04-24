export default {
    name: 'translate',
    alias: [],
    desc: 'translate command',
    category: 'tools',
    usage: 'translate',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command translate is active.' }, { quoted: msg });
    }
};
