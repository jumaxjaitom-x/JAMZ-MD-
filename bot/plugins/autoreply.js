import db from '../../lib/database.js';

export default {
    name: 'autoreply',
    alias: ['autoreplyon'],
    desc: 'Enable/Disable auto-reply feature.',
    category: 'owner',
    usage: 'autoreply on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('autoreply', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-reply feature enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('autoreply', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-reply feature disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: autoreply on/off' }, { quoted: msg });
        }
    }
};
