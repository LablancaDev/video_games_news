// app/api/rewrite/route.js

import { rewriteTextWithGPT } from '@/lib/gptRewriteServer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { originalText } = await req.json();

    if (!originalText) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    const rewritten = await rewriteTextWithGPT(originalText);
    return NextResponse.json({ rewritten });
  } catch (err) {
    console.error('API rewrite error:', err);
    return NextResponse.json({ error: 'Rewrite failed' }, { status: 500 });
  }
}


