export default {
    name: 'distance',
    alias: [],
    desc: 'distance command',
    category: 'utility',
    usage: 'distance',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command distance is active.' }, { quoted: msg });
    }
};
