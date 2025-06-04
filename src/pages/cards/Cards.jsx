import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'السبت', value: 3000 },
    { name: 'الأحد', value: 3200 },
    { name: 'الاثنين', value: 3500 },
    { name: 'الثلاثاء', value: 400 },
    { name: 'الأربعاء', value: 2600 },
    { name: 'الخميس', value: 4400 },
    { name: 'الجمعة', value: 2000 },
];

export default function Cards() {
    return (
        <div className="p-6 space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <Card title="إجمالي عدد المسارات" value="67" icon="🗂️" color="bg-pink-100" />
                <Card title="إجمالي عدد المواضيع" value="50" icon="📚" color="bg-yellow-100" />
                <Card title="إجمالي عدد المستخدمين" value="30.667" icon="👤" color="bg-purple-100" growth="28.4%" />
            </div>

            {/* Chart Section */}
            <div className="bg-white p-4 rounded-xl shadow">
                {/* Tabs */}
                <div className="flex justify-between items-center mb-4 text-gray-600 font-medium">
                    <div className='flex gap-2 items-center justify-center  text-sm xl:text-xl'>
                        <button className="hover:text-black">السنة</button>
                        <button className="hover:text-black">الشهر</button>
                        <button className="text-blue-600 border-b-2 border-blue-600">الأسبوع</button>
                    </div>
                    <h2 className="text-sm xl:text-xl font-bold mb-4 text-right">المستخدمين الجدد</h2>
                </div>

                {/* Chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis 
                            dataKey="name" 
                            reversed 
                            padding={{  right: 20 }} 
                            tick={{ fill: '#4a5568' }}
                        />
                        <YAxis tick={{ fill: '#4a5568' }} />
                        <Tooltip 
                            contentStyle={{
                                backgroundColor: '#ffffff',
                                borderColor: '#3b82f6',
                                borderRadius: '0.5rem',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#3b82f6"
                            fillOpacity={1} 
                            fill="url(#colorValue)" 
                            strokeWidth={2}
                            dot={{
                                fill: '#3b82f6',
                                stroke: '#ffffff',
                                strokeWidth: 2,
                                r: 5,
                                fillOpacity: 1
                            }}
                            activeDot={{
                                fill: '#1d4ed8',
                                stroke: '#ffffff',
                                strokeWidth: 2,
                                r: 6
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

function Card({ title, value, icon, color, growth }) {
    return (
        <div className='p-4 rounded-xl text-center grid grid-cols-2 justify-center gap-4 bg-white'>
            <div className=''>
                <p className="text-sm font-medium text-gray-700">{title}</p>
                <h3 className="text-2xl font-bold">{value}</h3>
                {growth && <span className="text-green-500 text-sm">{growth} ↑</span>}
            </div>
            <div className={`text-2xl mb-2 flex justify-center items-center rounded-lg shadow ${color}`}>{icon}</div>
        </div>
    );
}