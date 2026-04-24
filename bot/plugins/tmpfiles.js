export default {
    name: 'tmpfiles',
    alias: [],
    desc: 'tmpfiles command',
    category: 'upload',
    usage: 'tmpfiles',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tmpfiles is active.' }, { quoted: msg });
    }
};
