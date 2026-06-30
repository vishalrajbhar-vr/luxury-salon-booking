import { useState } from "react";
import StatsCard from "../components/StatsCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Dashboard() {
  const revenueData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 25000 },
    { month: "Apr", revenue: 22000 },
    { month: "May", revenue: 35000 },
    { month: "Jun", revenue: 42000 },
  ];

  const serviceData = [
    { name: "Hair Cut", value: 40 },
    { name: "Facial", value: 25 },
    { name: "Hair Spa", value: 20 },
    { name: "Beard", value: 15 },
  ];

  const colors = [
    "#dc2626",
    "#ef4444",
    "#f87171",
    "#fca5a5",
  ];

  const [activeAction, setActiveAction] = useState("add-service");

  return (
    <div className="bg-black text-white min-h-screen p-8">

      {/* Stats Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-10">

        <StatsCard
          title="Total Services"
          value="15"
        />

        <StatsCard
          title="Appointments"
          value="125"
        />

        <StatsCard
          title="Gallery Images"
          value="50"
        />

        <StatsCard
          title="Revenue"
          value="₹50,000"
        />

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8 mb-10">

        {/* Revenue Chart */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Monthly Revenue
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="revenue"
                fill="#dc2626"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* Pie Chart */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Service Distribution
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <PieChart>

              <Pie
                data={serviceData}
                dataKey="value"
                outerRadius={120}
              >
                {serviceData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={colors[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Tables */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Recent Appointments */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Recent Appointments
          </h2>

          <div className="space-y-4">

            <div className="bg-black p-4 rounded-xl flex justify-between">
              <span>Rahul Sharma</span>
              <span className="text-green-500">
                Confirmed
              </span>
            </div>

            <div className="bg-black p-4 rounded-xl flex justify-between">
              <span>Aman Verma</span>
              <span className="text-yellow-500">
                Pending
              </span>
            </div>

            <div className="bg-black p-4 rounded-xl flex justify-between">
              <span>Rohit Kumar</span>
              <span className="text-red-500">
                Cancelled
              </span>
            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button
              onClick={() => setActiveAction("add-service")}
              className={`rounded-xl p-5 font-semibold transition
                  ${activeAction === "add-service"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
              Add Service
            </button>

            <button
              onClick={() => setActiveAction("add-gallery")}
              className={`rounded-xl p-5 font-semibold transition
                   ${activeAction === "add-gallery"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
              Add Gallery
            </button>

            <button
              onClick={() => setActiveAction("view-bookings")}
              className={`rounded-xl p-5 font-semibold transition
                  ${activeAction === "view-bookings"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
              View Bookings
            </button>

            <button
              onClick={() => setActiveAction("manage-users")}
              className={`rounded-xl p-5 font-semibold transition
                ${activeAction === "manage-users"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
              Manage Users
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;