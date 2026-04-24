export default {
    name: 'base64',
    alias: [],
    desc: 'base64 command',
    category: 'tools',
    usage: 'base64',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command base64 is active.' }, { quoted: msg });
    }
};
