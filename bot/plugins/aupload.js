export default {
    name: 'aupload',
    alias: [],
    desc: 'aupload command',
    category: 'upload',
    usage: 'aupload',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command aupload is active.' }, { quoted: msg });
    }
};
