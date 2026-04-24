export default {
    name: 'flirt',
    alias: [],
    desc: 'flirt command',
    category: 'fun',
    usage: 'flirt',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command flirt is active.' }, { quoted: msg });
    }
};
