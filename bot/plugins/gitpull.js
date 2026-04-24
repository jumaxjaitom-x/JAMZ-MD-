import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);

export default {
    name: 'gitpull',
    alias: ['update-bot'],
    desc: 'Pull latest changes from git repository.',
    category: 'owner',
    usage: 'gitpull',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });

        try {
            const { stdout } = await execPromise('git pull');
            await sock.sendMessage(msg.key.remoteJid, { text: `*Git Pull Result:*\n\n${stdout}` }, { quoted: msg });
            if (stdout.includes('Updating')) {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Restarting bot...' }, { quoted: msg });
                process.exit(0);
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: `Error: ${error.message}` }, { quoted: msg });
        }
    }
};
