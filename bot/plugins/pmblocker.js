import db from '../../lib/database.js';

export default {
    name: 'pmblocker',
    alias: ['pmblock'],
    desc: 'Enable/Disable private message blocker.',
    category: 'owner',
    usage: 'pmblocker on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('pmblocker', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'PM Blocker enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('pmblocker', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'PM Blocker disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: pmblocker on/off' }, { quoted: msg });
        }
    }
};
