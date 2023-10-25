import pool from "./database";

const insertDummyData = async () => {
  pool.query(
    `
    CREATE TABLE IF NOT EXISTS resources (
      id SERIAL PRIMARY KEY,
      name TEXT,
      description TEXT
    )
    `
  );
  try {
    await pool.query("BEGIN");

    for (let i = 1; i <= 100; i++) {
      const name = `Resource ${i}`;
      const description = `Description for Resource ${i}`;

      await pool.query(
        "INSERT INTO resources (name, description) VALUES ($1, $2)",
        [name, description]
      );
    }

    await pool.query("COMMIT");
    console.log("Inserted 100 dummy records successfully.");
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error inserting dummy records:", error);
  } finally {
    await pool.end();
  }
};

insertDummyData();
