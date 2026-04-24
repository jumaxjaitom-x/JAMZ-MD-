export default {
    name: 'invitelink',
    alias: [],
    desc: 'invitelink command',
    category: 'group',
    usage: 'invitelink',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command invitelink is active.' }, { quoted: msg });
    }
};
