export default {
    name: 'crun',
    alias: [],
    desc: 'crun command',
    category: 'utility',
    usage: 'crun',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command crun is active.' }, { quoted: msg });
    }
};
