function Navbar() {
  return (
    <div className="bg-white h-16 shadow flex items-center justify-between px-8">
      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600"></div>

        <span className="font-semibold">
          Fleet Manager
        </span>
      </div>
    </div>
  );
}

export default Navbar;