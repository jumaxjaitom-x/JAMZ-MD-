import db from '../../lib/database.js';

export default {
    name: 'autoread',
    alias: ['readall'],
    desc: 'Enable/Disable auto-read (blue ticks).',
    category: 'owner',
    usage: 'autoread on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('autoread', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-read enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('autoread', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-read disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: autoread on/off' }, { quoted: msg });
        }
    }
};
