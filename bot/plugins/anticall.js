import db from '../../lib/database.js';

export default {
    name: 'anticall',
    alias: ['blockcall'],
    desc: 'Enable/Disable anti-call feature.',
    category: 'owner',
    usage: 'anticall on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('anticall', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Anti-call enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('anticall', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Anti-call disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: anticall on/off' }, { quoted: msg });
        }
    }
};
