import { db } from '../../../lib/firebaseAdmin'; // Ensure this points to your Firestore Admin setup
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const collectionName = 'blogContent'; // Replace with your collection name
    const snapshot = await db.collection(collectionName).get();

    if (snapshot.empty) {
      return NextResponse.json({ error: 'No documents found in the collection.' }, { status: 404 });
    }

    let data: Record<string, any> = {};
    snapshot.forEach((doc) => {
      data[doc.id] = doc.data();
    });

    // Prepare JSON file response
    const jsonResponse = new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="${collectionName}-backup.json"`,
      },
    });

    return jsonResponse;
  } catch (error) {
    console.error('Error during Firestore backup:', error);
    return NextResponse.json({ error: 'Failed to back up Firestore collection.' }, { status: 500 });
  }
}
