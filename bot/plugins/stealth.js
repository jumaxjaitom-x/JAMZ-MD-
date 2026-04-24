import db from '../../lib/database.js';

export default {
    name: 'stealth',
    alias: ['ghost'],
    desc: 'Enable/Disable stealth mode (no typing, no read).',
    category: 'owner',
    usage: 'stealth on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('autoread', false);
            db.setSetting('autotyping', false);
            db.setSetting('stealth', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Stealth mode enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('stealth', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Stealth mode disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: stealth on/off' }, { quoted: msg });
        }
    }
};
