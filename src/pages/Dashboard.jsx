import { House, Users, CodeXml, Calendar, BookText, Network, Award, Podcast, Settings, Menu, X } from 'lucide-react';
import logo from '../assets/1.jpg'
import Navbar from '../components/Navbar/Navbar';
import Cards from "../pages/cards/Cards"
import FrontEndDashboard from "./FrontEndDashboard";
import { useState } from 'react';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                type="button"
                className="absolute right-4 z-1 top-20 p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                className={`fixed top-0 right-0 z-40 w-64 h-screen bg-white transition-transform duration-300 ease-in-out transform 
    ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                    <div className="flex items-center justify-between ps-2.5 mb-4">
                        <button
                            onClick={toggleSidebar}
                            className="sm:hidden p-1 text-red-500 hover:text-gray-700 "
                        >
                            <X size={25} />
                        </button>
                        <img src={logo} className="h-12  xl:h-24 xl:w-full ml-10 bg-transparent " alt="Logo" />
                    </div>
                    <ul className="space-y-2 font-medium flex flex-col items-end">
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="ms-3">لوحة تحكم</span>
                                <House />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">المستخدمين</span>
                                <Users />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">المسارات</span>
                                <CodeXml />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">لغات البرمجة</span>
                                <Calendar />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">المشاريع</span>
                                <BookText />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">خريطة التعلم</span>
                                <Network strokeWidth={1.75} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">التصنيفات</span>
                                <Award strokeWidth={1.75} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">الاشتراكات</span>
                                <Podcast strokeWidth={1.75} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">الاعدادات</span>
                                <Settings strokeWidth={1.75} />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="bg-gray-100 sm:mr-64 rounded-lg h-screen">
                <Navbar />
                <div className="p-4 bg-gray-100 h-screen">
                    <Cards />
                    <FrontEndDashboard />
                </div>
            </div>
        </>
    )
}

export default Dashboard;