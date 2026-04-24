export default {
    name: 'mention',
    alias: ['tagowner'],
    desc: 'Enable/Disable owner mention alert.',
    category: 'owner',
    usage: 'mention on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            // Logic to track mentions usually happens in the message handler
            await sock.sendMessage(msg.key.remoteJid, { text: 'Owner mention alert enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Owner mention alert disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: mention on/off' }, { quoted: msg });
        }
    }
};
