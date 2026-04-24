export default {
    name: 'dna',
    alias: [],
    desc: 'dna command',
    category: 'utility',
    usage: 'dna',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command dna is active.' }, { quoted: msg });
    }
};
