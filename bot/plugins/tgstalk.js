export default {
    name: 'tgstalk',
    alias: [],
    desc: 'tgstalk command',
    category: 'stalk',
    usage: 'tgstalk',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tgstalk is active.' }, { quoted: msg });
    }
};
