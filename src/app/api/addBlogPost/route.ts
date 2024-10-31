// app/api/addBlogPost/route.ts
import { db } from '../../../lib/firebaseAdmin'; // Ensure this points to your Firestore Admin setup
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { slug, title, date, dateTimestamp,mainImageSrc, introduction, category, sections, conclusion } = data;

    // Validate required fields
    if (!slug || !title || !date || !dateTimestamp || !mainImageSrc || !introduction ||  !category || !sections || !conclusion) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save the blog post to Firestore
    await db.collection('blogContent').doc(slug).set({
      slug,
      title,
      date,
      dateTimestamp,
      mainImageSrc,
      introduction,
      category,
      sections,
      conclusion,
    });

    console.log('Blog post uploaded successfully:', slug);
    return NextResponse.json({ message: 'Blog post uploaded successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error uploading blog post:', error);
    return NextResponse.json({ error: 'Failed to upload blog post.' }, { status: 500 });
  }
}
