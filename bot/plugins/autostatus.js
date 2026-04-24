import db from '../../lib/database.js';

export default {
    name: 'autostatus',
    alias: ['autoview'],
    desc: 'Enable/Disable auto-viewing status.',
    category: 'owner',
    usage: 'autostatus on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('autostatus', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-view status enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('autostatus', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-view status disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: autostatus on/off' }, { quoted: msg });
        }
    }
};
