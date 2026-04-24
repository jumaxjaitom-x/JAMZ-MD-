export default {
    name: 'excard',
    alias: [],
    desc: 'excard command',
    category: 'tools',
    usage: 'excard',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command excard is active.' }, { quoted: msg });
    }
};
