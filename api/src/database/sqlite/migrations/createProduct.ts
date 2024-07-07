const createProduct = `
  CREATE TABLE IF NOT EXISTS product(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL CHECK(typeof(price) = 'real' OR typeof(price) = 'integer'),
    created_at DATETIME DEFAULT (DATETIME(CURRENT_TIMESTAMP, 'localtime')),
    updated_at DATETIME DEFAULT (DATETIME(CURRENT_TIMESTAMP, 'localtime'))
  )
`;

export default createProduct;
