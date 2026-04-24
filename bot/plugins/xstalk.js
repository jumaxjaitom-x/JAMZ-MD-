export default {
    name: 'xstalk',
    alias: [],
    desc: 'xstalk command',
    category: 'stalk',
    usage: 'xstalk',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command xstalk is active.' }, { quoted: msg });
    }
};
