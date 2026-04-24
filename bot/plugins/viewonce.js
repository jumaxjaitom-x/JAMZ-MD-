export default {
    name: 'viewonce',
    alias: [],
    desc: 'viewonce command',
    category: 'general',
    usage: 'viewonce',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command viewonce is active.' }, { quoted: msg });
    }
};
