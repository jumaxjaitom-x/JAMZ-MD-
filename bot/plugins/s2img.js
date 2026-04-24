export default {
    name: 's2img',
    alias: [],
    desc: 's2img command',
    category: 'stickers',
    usage: 's2img',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command s2img is active.' }, { quoted: msg });
    }
};
