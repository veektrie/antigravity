import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
  const filePath = "C:\\Users\\HP\\.gemini\\antigravity\\brain\\7b20693a-e531-4039-a525-1ba435cece44\\mercedes_vito_white_bg_1777025800415.png";
  if (fs.existsSync(filePath)) {
    const file = fs.readFileSync(filePath);
    return new NextResponse(file, { headers: { 'Content-Type': 'image/png' } });
  }
  return new NextResponse('Not found', { status: 404 });
}
