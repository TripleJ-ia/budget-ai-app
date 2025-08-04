import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('finance.db');

// Initialize DB and create table
export const initDB = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS spending (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT NOT NULL,
        amount REAL NOT NULL,
        date TEXT NOT NULL
      );
    `);
    console.log("✅ Database initialized");
  } catch (error) {
    console.error("❌ DB Init Error:", error);
  }
};

// Add a spending record
export const addSpendingDB = async (category: string, amount: number, date: string) => {
  try {
    await db.runAsync(
      'INSERT INTO spending (category, amount, date) VALUES (?, ?, ?)',
      [category, amount, date]
    );
    console.log("✅ Spending added:", category, amount);
  } catch (error) {
    console.error("❌ Add Spending Error:", error);
  }
};

// Get total spending by date
export const getTotalSpendingByDate = async (date: string) => {
  try {
    const result = await db.getFirstAsync(
      'SELECT SUM(amount) as total FROM spending WHERE date = ?',
      [date]
    ) as { total: number | null } | undefined;
    return result?.total ?? 0;
  } catch (error) {
    console.error("❌ Fetch Total Error:", error);
    return 0;
  }
};

// Get total spending by month (date format: "YYYY-MM")
export const getTotalSpendingByMonth = async (month: string) => {
  try {
    const result = await db.getFirstAsync(
      'SELECT SUM(amount) as total FROM spending WHERE date LIKE ?',
      [`${month}-%`]
    ) as { total: number | null } | undefined;
    return result?.total ?? 0;
  } catch (error) {
    console.error("❌ Fetch Total By Month Error:", error);
    return 0;
  }
};

// Get spending total by category for a specific date
export const getDaySpendingByCategory = async (date: string, category: string) => {
  try {
    const result = await db.getFirstAsync(
      'SELECT SUM(amount) as total FROM spending WHERE date = ? AND category = ?',
      [date, category]
    ) as { total: number | null } | undefined;
    return result?.total ?? 0;
  } catch (error) {
    console.error("❌ Fetch Day Spending By Category Error:", error);
    return 0;
  }
};

// Get spending total by category for a specific month
export const getMonthSpendingByCategory = async (month: string, category: string) => {
  try {
    const result = await db.getFirstAsync(
      'SELECT SUM(amount) as total FROM spending WHERE date LIKE ? AND category = ?',
      [`${month}-%`, category]
    ) as { total: number | null } | undefined;
    return result?.total ?? 0;
  } catch (error) {
    console.error("❌ Fetch Month Spending By Category Error:", error);
    return 0;
  }
};

// Get each category and corresponding spending on a specific day
export const getCategoriesAndSpendingByDay = async (date: string) => {
  try {
    const results = await db.getAllAsync(
      'SELECT category, SUM(amount) as total FROM spending WHERE date = ? GROUP BY category',
      [date]
    ) as { category: string; total: number }[];
    return results;
  } catch (error) {
    console.error("❌ Fetch Categories And Spending By Day Error:", error);
    return [];
  }
};

// Get each specific spending record for a given category on a specific day
export const getSpendingsByCategoryAndDay = async (category: string, date: string) => {
  try {
    const results = await db.getAllAsync(
      'SELECT * FROM spending WHERE category = ? AND date = ?',
      [category, date]
    ) as { id: number; category: string; amount: number; date: string }[];
    return results;
  } catch (error) {
    console.error("❌ Fetch Spendings By Category And Day Error:", error);
    return [];
  }
};

// Get each category and corresponding spending on a specific month
export const getCategoriesAndSpendingByMonth = async (month: string) => {
  try {
    const results = await db.getAllAsync(
      'SELECT category, SUM(amount) as total FROM spending WHERE date LIKE ? GROUP BY category',
      [`${month}-%`]
    ) as { category: string; total: number }[];
    return results;
  } catch (error) {
    console.error("❌ Fetch Categories And Spending By Month Error:", error);
    return [];
  }
};

// Get all unique categories for a specific month (date format: "YYYY-MM")
export const getCategoriesForMonth = async (month: string) => {
  try {
    const results = await db.getAllAsync(
      'SELECT DISTINCT category FROM spending WHERE date LIKE ?',
      [`${month}-%`]
    ) as { category: string }[];
    return results.map(r => r.category);
  } catch (error) {
    console.error("❌ Fetch Categories For Month Error:", error);
    return [];
  }
};

export default db;
