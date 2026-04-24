export default {
    name: 'blur',
    alias: [],
    desc: 'blur command',
    category: 'tools',
    usage: 'blur',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command blur is active.' }, { quoted: msg });
    }
};
