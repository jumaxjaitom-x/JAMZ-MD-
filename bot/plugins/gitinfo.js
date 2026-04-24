import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);

export default {
    name: 'gitinfo',
    alias: ['git'],
    desc: 'Show git repository information.',
    category: 'owner',
    usage: 'gitinfo',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });

        try {
            const { stdout: status } = await execPromise('git status -s');
            const { stdout: commit } = await execPromise('git log -1 --format="%h - %s (%cr)"');
            const { stdout: remote } = await execPromise('git remote -v');

            const message = `*Git Repository Info*\n\n*Latest Commit:* ${commit.trim()}\n\n*Status:*\n${status.trim() || 'Clean'}\n\n*Remotes:*\n${remote.trim()}`;
            await sock.sendMessage(msg.key.remoteJid, { text: message }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error fetching git info.' }, { quoted: msg });
        }
    }
};
