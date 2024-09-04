// pages/api/auth/register.js

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
    try {
        // Parse the incoming request body
        const body = await request.json();
        const { name, email, password } = body;
        // Validate input
        if (!name || !email || !password) {
            return new NextResponse(
                JSON.stringify({ message: 'All fields are required' }),
                { status: 400 }
            );
        }

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new NextResponse(
                JSON.stringify({ message: 'Email already in use' }),
                { status: 400 }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.createMany({
            data: [
                {
                    name: name,
                    email: email,
                    password: hashedPassword,
                }
            ]
        });

        // Return success response
        return new NextResponse(
            JSON.stringify({ message: 'User registered successfully' }),
            { status: 201 }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: 'Error registering user' }),
            { status: 500 }
        );
    }
}

export async function GET() {
    return new NextResponse(
        JSON.stringify({ message: 'Method not allowed' }),
        { status: 405 }
    );
}
