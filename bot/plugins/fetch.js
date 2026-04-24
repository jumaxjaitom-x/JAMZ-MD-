export default {
    name: 'fetch',
    alias: [],
    desc: 'fetch command',
    category: 'tools',
    usage: 'fetch',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command fetch is active.' }, { quoted: msg });
    }
};
