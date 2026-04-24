import fs from 'fs';
import path from 'path';

export default {
    name: 'clearsession',
    alias: ['reset-session'],
    desc: 'Clear the bot session (log out).',
    category: 'owner',
    usage: 'clearsession',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        await sock.sendMessage(msg.key.remoteJid, { text: 'Clearing session and restarting...' }, { quoted: msg });
        
        const sessionPath = './session';
        if (fs.existsSync(sessionPath)) {
            fs.rmSync(sessionPath, { recursive: true, force: true });
        }
        
        process.exit(0);
    }
};
