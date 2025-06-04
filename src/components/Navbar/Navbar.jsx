
import { Search } from "lucide-react"
import users from "../../assets/img.jpg"
const Navbar = () => {
    return (
        <>


            <nav className="bg-white border border-gray-200  mb-4 rounded">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center  gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="  md:font-medium text-xs line-clamp-1 xl:flex flex-col items-end justify-center font-bold">
                            <span className="">اسامة عسكر</span>
                            <span className="font-mono">عضو</span>
                        </div>
                        <img src={users} alt="img" className='h-8 w-8 xl:h-12 xl:w-12 rounded-full' />
                        <div className="flex justify-center items-center gap-4">
                            <span className="h-8 w-8 xl:h-12 xl:w-12 rounded-full flex items-center justify-center bg-gray-100">
                                <button class="btn btn-ghost btn-circle">
                                    <div class="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                        <span class="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </button>
                            </span>
                            <span className="h-8 w-8 xl:h-12 xl:w-12 rounded-full flex items-center justify-center bg-gray-100">
                                <button className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <img
                                            src="https://flagcdn.com/w80/sa.png" // أو أي رابط آخر
                                            alt="علم السعودية"
                                            className="h-6 w-6 xl:w-8 xl:h-8 object-cover"
                                        />
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </button>
                            </span>
                            <div className="relative  bg-gray-50  p-2 rounded-3xl">
                                
                                <input
                                    type="text"
                                    placeholder="بحث"
                                    className="border-none outline-none w-full pr-10 text-right bg-gray-50 lex items-end"
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center pl-3">
                                    <Search className="h-5 w-5 text-gray-500" />
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar