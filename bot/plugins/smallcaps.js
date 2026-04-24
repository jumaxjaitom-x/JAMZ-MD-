export default {
    name: 'smallcaps',
    alias: [],
    desc: 'smallcaps command',
    category: 'tools',
    usage: 'smallcaps',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command smallcaps is active.' }, { quoted: msg });
    }
};
