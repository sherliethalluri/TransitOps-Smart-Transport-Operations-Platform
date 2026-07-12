import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div className="p-8">
          <div className="grid grid-cols-3 gap-6">
            <StatCard title="Active Vehicles" value="12" />
            <StatCard title="Drivers" value="8" />
            <StatCard title="Active Trips" value="5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;