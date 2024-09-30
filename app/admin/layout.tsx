'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
// import { AuthContextProvider } from '@/context/AuthContext'
// import ProtectedRoute from '@/components/ProtectedRoute'
import { ThemeProvider } from './context/ThemeContext';

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {

    const [themeMode, setThemeMode] = useState("light");
    const darkTheme = () => {
        setThemeMode("dark");
    };
    const lightTheme = () => {
        setThemeMode("light");
    };
    useEffect(() => {
        document.querySelector('html')?.classList.remove("dark", "light");
        document.querySelector('html')?.classList.add(themeMode);
    }, [themeMode]);

    return (
        // <AuthContextProvider>
        //     <ProtectedRoute>
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
            <div className="flex flex-col h-screen poppins_regular ">
                <Header />
                <div className='flex flex-grow max-w-screen-2xl w-screen mx-auto'>
                    <Sidebar />
                    <div className='content flex-grow'>
                        {children}
                    </div>
                </div>
            </div>
        </ThemeProvider>

        //     </ProtectedRoute>
        // </AuthContextProvider>
    )
}

export default AdminLayout
