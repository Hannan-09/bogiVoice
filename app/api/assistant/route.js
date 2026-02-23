import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import os from "os";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  return NextResponse.json({
    success: true,
    message: "Audio endpoint ready (next step STT)"
  });
}