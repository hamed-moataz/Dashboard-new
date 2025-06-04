import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
    { name: 'Vue js', value: 52 },
    { name: 'Angular', value: 28 },
    { name: 'Javascript', value: 60 },
    { name: 'Bootstrap', value: 50 },
    { name: 'CSS', value: 50 },
    { name: 'HTML', value: 68 },
];

const rankingData = [
    { name: 'اسامة عسكر', xp: 100, image: 'https://randomuser.me/api/portraits/men/32.jpg', icon: '🏆' },
    { name: 'انس الجهنى', xp: 70, image: 'https://randomuser.me/api/portraits/men/52.jpg', icon: '🥈' },
    { name: 'عبد الرحمن حسن', xp: 56, image: 'https://randomuser.me/api/portraits/men/76.jpg' },
    { name: 'مهاب اسامة', xp: 50, image: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { name: 'بسام محمد', xp: 48, image: 'https://randomuser.me/api/portraits/men/90.jpg' },
];

export default function FrontEndDashboard() {
    return (
        <div className="flex flex-col bg-gray-100  md:flex-col gap-4 p-4  xl:flex-row">
            {/* Chart Section */}
            <div className="bg-white rounded-xl shadow p-4 w-full md:w-full">
                <div className="flex justify-between items-center mb-4">
                    <select className="border-none outline-none rounded px-2 py-1 text-sm">
                        <option className=''>Front End</option>
                    </select>
                    <h2 className="text-xl font-bold md:font-medium md:text-lg">Front End</h2>
                </div>
                <ResponsiveContainer width="100%" height={300} >
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#ec4899" radius={[8, 8, 0, 0]} barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Ranking Section */}
            <div className="bg-white rounded-xl shadow p-4 w-full md:w-full">
                <h2 className="text-xl font-bold mb-4 text-end">الأعلى تصنيفًا (5)</h2>
                <ul className="space-y-4">
                    {rankingData.map((user, index) => (
                        <li key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-blue-600 font-semibold w-12">{user.xp} XP</span>
                                <span className="text-xl">{user.icon}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-medium">{user.name}</span>
                                <img src={user.image} alt={user.name} className="rounded-full w-10 h-10" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
