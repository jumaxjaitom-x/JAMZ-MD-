export default {
    name: 'tts',
    alias: [],
    desc: 'tts command',
    category: 'tools',
    usage: 'tts',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command tts is active.' }, { quoted: msg });
    }
};
