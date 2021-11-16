import { Router } from "express";
import { createResourceController } from "./controllers/createResource.controller";
import { getResourcesController } from "./controllers/getResources.controller";

const router = Router();

router.route("/resource").get(getResourcesController).post(createResourceController);

export default router;
