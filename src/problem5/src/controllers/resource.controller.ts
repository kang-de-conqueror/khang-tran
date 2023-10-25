import db from "../database";
import { Resource } from "../models/resource";

const createResource = async (resource: Resource) => {
  const { name, description } = resource;

  try {
    const res = await db.query(
      "INSERT INTO resources (name, description) VALUES ($1, $2) RETURNING id",
      [name, description]
    );
    console.log(`Inserted row with ID: ${res.rows[0].id}`);
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be caught by the caller
  }
};

const listResources = async (filters: { [key: string]: string }) => {
  const { name } = filters;
  const query = name
    ? "SELECT * FROM resources WHERE name LIKE $1"
    : "SELECT * FROM resources";
  const values = name ? [`%${name}%`] : [];

  try {
    const res = await db.query(query, values);
    return res.rows;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be caught by the caller
  }
};

const getResourceById = async (id: number) => {
  try {
    const res = await db.query("SELECT * FROM resources WHERE id = $1", [id]);
    return res.rows[0];
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be caught by the caller
  }
};

const updateResource = async (id: number, resource: Resource) => {
  const { name, description } = resource;

  try {
    const res = await db.query(
      "UPDATE resources SET name = $1, description = $2 WHERE id = $3 RETURNING id",
      [name, description, id]
    );
    console.log(`Updated row with ID: ${res.rows[0].id}`);
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be caught by the caller
  }
};

const deleteResource = async (id: number) => {
  try {
    await db.query("DELETE FROM resources WHERE id = $1", [id]);
    console.log(`Deleted row with ID: ${id}`);
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be caught by the caller
  }
};

export {
  createResource,
  listResources,
  getResourceById,
  updateResource,
  deleteResource,
};
