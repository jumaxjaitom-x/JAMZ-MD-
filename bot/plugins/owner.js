export default {
    name: 'owner',
    alias: [],
    desc: 'owner command',
    category: 'info',
    usage: 'owner',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command owner is active.' }, { quoted: msg });
    }
};
