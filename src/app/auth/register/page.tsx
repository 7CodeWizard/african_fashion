// pages/register/index.js
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';
import Image from 'next/image';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRegister = async (e: any) => {
        e.preventDefault();

        try {
            // Replace this fetch URL with your actual registration endpoint
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/auth/login');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to register');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-800">
            <div className='flex flex-col border dark:border-primaryHotefy-lighter dark:bg-[#18181b] items-center justify-center p-8 rounded-lg  max-w-md shadow-lg'>
                <div className='flex justify-center items-center gap-4'>
                    <Image
                        src="/logo.png"
                        alt="African Fashion Logo"
                        width={100}
                        height={100}
                        className="mb-2"
                        style={{ borderRadius: '50%' }}
                    />
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        African Fashion
                    </h1>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-100 mb-8">
                    Create an Account
                </p>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form className="flex flex-col gap-4 w-full " onSubmit={handleRegister}>
                    <Input
                        fullWidth
                        name="name"
                        label="Name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        fullWidth
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        fullWidth
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" className="mt-4" color="secondary">
                        Register
                    </Button>
                </form>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <a
                        href="/login"
                        className="text-blue-500 hover:underline"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/auth/login');
                        }}
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}
