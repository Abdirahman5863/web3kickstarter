// @ts-nocheck
"use server";

// url:http://localhost:3000/api/author
import prisma from "@/libs/prismadb";
import { request } from "http";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  try {
    const body = await request.json();
    const { name } = body;
    const newPost = await prisma.author.create({
      data: {
        name,
      },
    });
    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};
