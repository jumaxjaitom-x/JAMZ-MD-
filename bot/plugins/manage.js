export default {
    name: 'manage',
    alias: ['control'],
    desc: 'Bot management interface (text-based).',
    category: 'owner',
    usage: 'manage',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const message = `*Bot Management Panel*\n\n1. .settings - View current settings\n2. .sysinfo - View system information\n3. .maintenance on/off - Toggle maintenance mode\n4. .clearsession - Reset session\n5. .cleartmp - Clear temp files`;
        await sock.sendMessage(msg.key.remoteJid, { text: message }, { quoted: msg });
    }
};
