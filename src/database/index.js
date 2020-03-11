import * as SQLite from 'expo-sqlite';

const db =  SQLite.openDatabase("meu_compromisso_offline.db", 1.0, "Banco para offline", false);

export default db;