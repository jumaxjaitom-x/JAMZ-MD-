export default {
    name: 'character',
    alias: [],
    desc: 'character command',
    category: 'group',
    usage: 'character',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command character is active.' }, { quoted: msg });
    }
};
