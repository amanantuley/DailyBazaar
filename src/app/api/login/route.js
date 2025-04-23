// src/app/api/login/route.js
import Home from '@/app/Home/page';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required.' }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('Dailybazaar'); // Replace with your database name
    const collection = db.collection('Login'); // Replace with your collection name

    const result = await collection.insertOne({ email, password });

    return new Response(JSON.stringify({ message: 'Login data stored successfully', result }), { status: 200 });
  } catch (error) {
    console.error('Error storing login data:', error);
    return new Response(JSON.stringify({ message: 'Internal server error.' }), { status: 500 });
  }
}
