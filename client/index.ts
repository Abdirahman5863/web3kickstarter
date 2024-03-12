// @ts-nocheck
import { Prisma, PrismaClient } from "@prisma/client";
import { create } from "domain";

let prisma: PrismaClient;
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

if (process.env.NODE_ENV === "production") {
  const prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
// async function main() {
//   const author = await prisma.author.create({
//     data: {
//       name: "Abdi",
//     },
//   });

//   console.log(author);
//   const project = await prisma.project.create({
//     data: {
//       image: "image-url",
//       projectname: "Project Name",
//       description: "Project Description",
//     },
//   });

//   console.log(project);
//   // const update = await prisma.project.update({
//   //   where: {},
//   //   data: {
//   //     image: "new-image-url",
//   //     // projectname: "New Project Name",
//   //     // description: "New Project Description"
//   //   },
//   // });

//   // e);
//   main()
//     .catch(async (e) => {
//       console.error(e);
//       process.exit(1);
//     })
//     .finally(async () => {
//       await prisma.$disconnect();
//     });
// }
export default prisma;
