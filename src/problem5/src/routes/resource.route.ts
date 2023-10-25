import express from "express";
import {
  createResource,
  listResources,
  getResourceById,
  updateResource,
  deleteResource,
} from "../controllers/resource.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Starting create resource");
  await createResource(req.body);
  res.send("Resource created successfully");
});

router.get("/", async (req, res) => {
  console.log("Starting get resource");
  const resources = await listResources(req.body);
  res.json(resources);
});

router.get("/:id", async (req, res) => {
  console.log("Starting get resource by id");
  const id = parseInt(req.params.id);
  const resource = await getResourceById(id);
  res.json(resource);
});

router.put("/:id", async (req, res) => {
  console.log("Starting update resource by id");
  const id = parseInt(req.params.id);
  await updateResource(id, req.body);
  res.send("Resource updated successfully");
});

router.delete("/:id", async (req, res) => {
  console.log("Starting delete resource by id");
  const id = parseInt(req.params.id);
  await deleteResource(id);
  res.send("Resource deleted successfully");
});

export default router;
