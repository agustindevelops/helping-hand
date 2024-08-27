// app/api/inquire.js
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  return NextResponse.next();
}

export async function POST(req, res) {
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
