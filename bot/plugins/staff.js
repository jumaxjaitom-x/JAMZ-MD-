export default {
    name: 'staff',
    alias: [],
    desc: 'staff command',
    category: 'group',
    usage: 'staff',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command staff is active.' }, { quoted: msg });
    }
};
