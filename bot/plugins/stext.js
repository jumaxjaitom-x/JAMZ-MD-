export default {
    name: 'stext',
    alias: [],
    desc: 'stext command',
    category: 'menu',
    usage: 'stext',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command stext is active.' }, { quoted: msg });
    }
};
