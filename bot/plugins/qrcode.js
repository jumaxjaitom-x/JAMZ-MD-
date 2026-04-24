export default {
    name: 'qrcode',
    alias: [],
    desc: 'qrcode command',
    category: 'tools',
    usage: 'qrcode',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command qrcode is active.' }, { quoted: msg });
    }
};
