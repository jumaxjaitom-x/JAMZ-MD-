export default {
    name: 'stoprent',
    alias: ['delrent'],
    desc: 'Stop a rented bot session.',
    category: 'owner',
    usage: 'stoprent [number]',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        // Placeholder logic
        await sock.sendMessage(msg.key.remoteJid, { text: 'Rent session stopped.' }, { quoted: msg });
    }
};
