export default {
    name: 'perf',
    alias: [],
    desc: 'perf command',
    category: 'general',
    usage: 'perf',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command perf is active.' }, { quoted: msg });
    }
};
