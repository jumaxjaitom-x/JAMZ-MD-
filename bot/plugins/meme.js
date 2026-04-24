export default {
    name: 'meme',
    alias: [],
    desc: 'meme command',
    category: 'fun',
    usage: 'meme',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command meme is active.' }, { quoted: msg });
    }
};
