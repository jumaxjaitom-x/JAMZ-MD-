import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database', 'db.json');

if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}

if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({
        settings: {},
        users: {},
        groups: {}
    }, null, 2));
}

const db = {
    get: () => JSON.parse(fs.readFileSync(dbPath, 'utf8')),
    save: (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2)),
    update: (key, value) => {
        const data = db.get();
        data[key] = value;
        db.save(data);
    },
    getSetting: (name) => {
        const data = db.get();
        return data.settings[name];
    },
    setSetting: (name, value) => {
        const data = db.get();
        data.settings[name] = value;
        db.save(data);
    }
};

export default db;
