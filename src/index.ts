import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import v1 from "./routes/v1";
import db from "./models";

const app = new Hono();
db.sequelize
  .sync()
  .then(() => console.log("SEQUELIZE SUCCESS"))
  .catch((e) => console.log("SEQUELIZE ERR", e));

app.use("*", logger());

app.get("/", (c) => c.json({ status: 200, message: "OK" }));
app.notFound((c) => c.json({ status: 404, message: "NOT FOUND" }));
app.route("/v1", v1);

serve(app);
