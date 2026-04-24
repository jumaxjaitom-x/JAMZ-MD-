export default {
    name: 'listcmd',
    alias: ['commands'],
    desc: 'List all available command names.',
    category: 'owner',
    usage: 'listcmd',
    execute: async (sock, msg, { plugins }) => {
        const cmdNames = Array.from(plugins.keys()).sort();
        let message = `*JAMZ-MD Commands List*\n\n`;
        message += cmdNames.map((name, i) => `${i + 1}. ${name}`).join('\n');
        message += `\n\nTotal: ${cmdNames.length}`;
        
        await sock.sendMessage(msg.key.remoteJid, { text: message }, { quoted: msg });
    }
};
