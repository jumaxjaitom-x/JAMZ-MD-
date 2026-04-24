export default {
    name: 'pomf',
    alias: [],
    desc: 'pomf command',
    category: 'upload',
    usage: 'pomf',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command pomf is active.' }, { quoted: msg });
    }
};
