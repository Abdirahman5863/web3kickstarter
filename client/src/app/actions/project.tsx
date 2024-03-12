// @ts-nocheck
"use server";
// url:http://localhost:3000/Api/project
import prisma from "@/libs/prismadb";
import { request } from "http";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  try {
    const body = await request.json();
    const { image, projectname, description } = body;
    const projectpost = await prisma.project.create({
      data: {
        image,
        projectname,
        description,
      },
    });

    return NextResponse.json(projectpost);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};
