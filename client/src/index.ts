// // index.js

// const express = require("express");
// const { PrismaClient } = require("@prisma/client");
// require("dotenv").config();

// const app = express();
// const prisma = new PrismaClient();

// app.use(express.json());

// // Middleware to handle errors
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

// // Helper function to handle database errors
// async function handleDBOperation(operation) {
//   try {
//     const result = await operation();
//     return { success: true, data: result };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// }

// // Routes
// app.get("/authors", async (req, res) => {
//   const authors = await prisma.author.findMany();
//   res.json(authors);
// });

// app.get("/projects", async (req, res) => {
//   const projects = await prisma.project.findMany();
//   res.json(projects);
// });

// app.post("/authors", async (req, res) => {
//   const { name } = req.body;
//   const result = await handleDBOperation(async () => {
//     return prisma.author.create({ data: { name } });
//   });
//   res.json(result);
// });

// app.post("/projects", async (req, res) => {
//   const { image, projectName, description } = req.body;
//   const result = await handleDBOperation(async () => {
//     return prisma.project.create({
//       data: { image, projectname: projectName, description },
//     });
//   });
//   res.json(result);
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
