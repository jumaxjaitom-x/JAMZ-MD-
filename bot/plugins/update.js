import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);

export default {
    name: 'update',
    alias: ['bot-update'],
    desc: 'Update the bot to the latest version.',
    category: 'owner',
    usage: 'update',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        try {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Checking for updates...' }, { quoted: msg });
            const { stdout: fetchResult } = await execPromise('git fetch');
            const { stdout: statusResult } = await execPromise('git status');
            
            if (statusResult.includes('Your branch is up to date')) {
                return sock.sendMessage(msg.key.remoteJid, { text: 'Bot is already up to date.' }, { quoted: msg });
            }
            
            await sock.sendMessage(msg.key.remoteJid, { text: 'Updating bot...' }, { quoted: msg });
            const { stdout: pullResult } = await execPromise('git pull');
            await sock.sendMessage(msg.key.remoteJid, { text: `Update successful:\n${pullResult}\n\nRestarting...` }, { quoted: msg });
            process.exit(0);
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: `Update failed: ${error.message}` }, { quoted: msg });
        }
    }
};
