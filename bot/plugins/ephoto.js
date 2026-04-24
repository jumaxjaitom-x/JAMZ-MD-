export default {
    name: 'ephoto',
    alias: [],
    desc: 'ephoto command',
    category: 'menu',
    usage: 'ephoto',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command ephoto is active.' }, { quoted: msg });
    }
};
