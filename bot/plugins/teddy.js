export default {
    name: 'teddy',
    alias: [],
    desc: 'teddy command',
    category: 'fun',
    usage: 'teddy',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command teddy is active.' }, { quoted: msg });
    }
};
