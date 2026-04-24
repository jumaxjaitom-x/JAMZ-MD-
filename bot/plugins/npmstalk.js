export default {
    name: 'npmstalk',
    alias: [],
    desc: 'npmstalk command',
    category: 'stalk',
    usage: 'npmstalk',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command npmstalk is active.' }, { quoted: msg });
    }
};
