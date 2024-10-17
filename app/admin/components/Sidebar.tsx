"use client";
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import useTheme from "../context/ThemeContext";
import { settingsItems, sidebarItems } from '../constant';
import Link from 'next/link';
import Modal from '../components/Modal';

export default function Sidebar() {
    const router = useRouter()
    const [activeItem, setActiveItem] = useState(null);
    const { themeMode, lightTheme, darkTheme } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const textColor = themeMode === "dark" ? 'text-white' : 'text-gray-700';
    const borderColor = themeMode === "dark" ? "border-stone-100" : "border-stone-300"

    const onChangeBtn = (e:any) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    const handleItemClick = (item:any) => {
        setActiveItem(item);
        if (item === "Logout") {
            setIsModalOpen(true)
        }
    };

    const handleLogout = () => {
        router.push('/')
        setIsModalOpen(false);
    };

    return (
        <div className={`border-r-2 ${borderColor} font-light`}>
            <div className="py-3 border-b-2 border-stone-100 mt-2">
                <h2 className={`${textColor} ml-4`}>Dashboard</h2>
            </div>

            <div className={`flex flex-col my-6 text-sm ${textColor} font-medium`}>
                {sidebarItems.map((item) => (
                    <div
                        key={item.id}
                        className={`w-60 py-5 cursor-pointer ${activeItem === item.id ? 'text-black bg-gray-100 border-r-3 border-black' : ''}`}
                        onClick={() => handleItemClick(item.id)}
                    >
                        <Link href={`${item.link}`} className="flex items-center gap-4 ml-4">
                            <span className={`text-lg ${activeItem === item.id ? 'text-black' : ''}`}>
                                {item.icon}
                            </span>
                            <p>{item.label}</p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="py-3 border-b-2 border-stone-100 mt-2">
                <h2 className={`${textColor} ml-4`}>Settings</h2>
            </div>

            <div className={`flex flex-col my-6 text-sm ${textColor} font-medium`}>
                {settingsItems.map((item) => (
                    <div
                        key={item.id}
                        className={`w-60 flex items-center gap-4 py-5 cursor-pointer ${activeItem === item.id ? 'text-black bg-gray-100 border-r-3 border-black' : ''}`}
                        onClick={() => handleItemClick(item.id)}
                    >
                        <Link href={`${item.link}`} className="flex items-center gap-4 ml-4">
                            {item.icon && (
                                <span className={`text-xl ${activeItem === item.id ? 'text-black' : ''}`}>
                                    {item.icon}
                                </span>
                            )}
                            <p>{item.label}</p>
                        </Link>

                        {item.id === 'changeTheme' && (
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    onChange={onChangeBtn}
                                    checked={themeMode === "dark"}
                                />
                                <div className="group peer bg-white rounded-full duration-300 w-7 h-3 ring-2 ring-gray-500 after:duration-300 after:bg-gray-400 peer-checked:after:bg-black peer-checked:ring-black after:rounded-full after:absolute after:h-2 after:w-2 after:top-0.5 after:left-0.5 after:flex after:justify-center after:items-center peer-checked:after:translate-x-4 peer-hover:after:scale-95"></div>
                            </label>
                        )}
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleLogout}
            />
        </div>
    );
}
