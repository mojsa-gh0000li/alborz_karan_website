'use client';

import { Button } from './ui/button';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    // Function to set the initial theme based on the time
    const setInitialTheme = () => {
        const hour = new Date().getHours();
        return hour >= 6 && hour < 18 ? 'light' : 'dark'; // Light theme from 6 AM to 6 PM
    };

    useEffect(() => {
        const initialTheme = setInitialTheme();
        setTheme(initialTheme); // Set the initial theme on component mount
    }, [setTheme]);

    return (
        <div>
            <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle Theme" // Accessibility improvement
            >
                {theme === 'dark' ? (
                    <SunIcon
                        className="h-[1.2rem] w-[1.2rem] transition-all" // Sun icon for light theme
                    />
                ) : (
                    <MoonIcon
                        className="h-[1.2rem] w-[1.2rem] transition-all" // Moon icon for dark theme
                    />
                )}
            </Button>
        </div>
    );
}

export default ThemeToggler;
