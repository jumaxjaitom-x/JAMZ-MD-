export default {
    name: 'simp',
    alias: [],
    desc: 'simp command',
    category: 'group',
    usage: 'simp',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command simp is active.' }, { quoted: msg });
    }
};
