import fs from 'fs';
import path from 'path';

export default {
    name: 'cleartmp',
    alias: ['reset-tmp'],
    desc: 'Clear the temporary files folder.',
    category: 'owner',
    usage: 'cleartmp',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const tmpPath = './tmp';
        if (fs.existsSync(tmpPath)) {
            const files = fs.readdirSync(tmpPath);
            for (const file of files) {
                fs.unlinkSync(path.join(tmpPath, file));
            }
        }
        
        await sock.sendMessage(msg.key.remoteJid, { text: 'Temporary files cleared.' }, { quoted: msg });
    }
};
