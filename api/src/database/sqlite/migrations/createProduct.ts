const createProduct = `
  CREATE TABLE IF NOT EXISTS products(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    available TEXT CHECK(available IN (true, false)) NOT NULL DEFAULT true,
    price REAL NOT NULL CHECK(typeof(price) = 'real' OR typeof(price) = 'integer'),
    created_at DATETIME DEFAULT (DATETIME(CURRENT_TIMESTAMP, 'localtime')),
    updated_at DATETIME DEFAULT (DATETIME(CURRENT_TIMESTAMP, 'localtime'))
  )
`;

export default createProduct;
