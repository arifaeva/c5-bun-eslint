import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => {
    const data = "hello!"; // unused -> dirty code
    console.log(data); // log vital data -> exposed

    return "Hello Elysia!";
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
