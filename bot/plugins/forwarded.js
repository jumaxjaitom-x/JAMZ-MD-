export default {
    name: 'forwarded',
    alias: [],
    desc: 'forwarded command',
    category: 'tools',
    usage: 'forwarded',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command forwarded is active.' }, { quoted: msg });
    }
};
