import db from '../../lib/database.js';

export default {
    name: 'maintenance',
    alias: ['maintenancemode'],
    desc: 'Enable/Disable maintenance mode.',
    category: 'owner',
    usage: 'maintenance on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('maintenance', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Maintenance mode enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('maintenance', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Maintenance mode disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: maintenance on/off' }, { quoted: msg });
        }
    }
};
