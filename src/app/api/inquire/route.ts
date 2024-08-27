// app/api/inquire.js
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, subject, message } = await req.json();
    const newInquiry = await prisma.inquiry.create({
      data: {
        fullName,
        email,
        phone,
        subject,
        message,
      },
    });
    return NextResponse.json(newInquiry);
  } catch (error) {
    return NextResponse.json({ error: "Unable to create inquiry" });
  }
}
