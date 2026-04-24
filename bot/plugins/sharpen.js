export default {
    name: 'sharpen',
    alias: [],
    desc: 'sharpen command',
    category: 'tools',
    usage: 'sharpen',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command sharpen is active.' }, { quoted: msg });
    }
};
