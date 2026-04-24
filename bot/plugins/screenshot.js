export default {
    name: 'screenshot',
    alias: [],
    desc: 'screenshot command',
    category: 'tools',
    usage: 'screenshot',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command screenshot is active.' }, { quoted: msg });
    }
};
