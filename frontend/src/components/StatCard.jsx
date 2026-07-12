function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-3xl font-bold">
        {value}
      </h2>

      <p className="text-gray-500 mt-2">
        {title}
      </p>
    </div>
  );
}

export default StatCard;
