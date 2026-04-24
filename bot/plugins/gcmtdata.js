export default {
    name: 'gcmtdata',
    alias: [],
    desc: 'gcmtdata command',
    category: 'group',
    usage: 'gcmtdata',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command gcmtdata is active.' }, { quoted: msg });
    }
};
