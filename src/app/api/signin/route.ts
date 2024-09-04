// pages/api/auth/register.js

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getSession, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import NextAuth from 'next-auth/next';

export async function POST(request: any) {
    try {
        // Parse the incoming request body
        const body = await request.json();
        const { email, password } = body;
        // Validate input
        if (!email || !password) {
            return new NextResponse(
                JSON.stringify({ message: 'Email and password are required' }),
                { status: 400 }
            );
        }

        // Check if the user already exists
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return new NextResponse(
                JSON.stringify({ message: 'Invalid email or password' }),
                { status: 400 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return new NextResponse(
                JSON.stringify({ message: 'Invalid email or password' }),
                { status: 400 }
            );
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        // Create a session with NextAuth if needed
        const auth = await NextAuth(authOptions);

        console.log("auth:", auth)
        return new NextResponse(
            JSON.stringify({ message: 'Login successful', token, user }),
            { status: 200 }
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
