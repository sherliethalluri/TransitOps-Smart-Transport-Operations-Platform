const menuItems = [
  "Dashboard",
  "Vehicles",
  "Drivers",
  "Trips",
  "Maintenance",
  "Fuel",
  "Reports",
];

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
         TransitOps
      </h1>

      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;