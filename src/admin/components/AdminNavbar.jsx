function AdminNavbar() {
  return (
    <div className="bg-zinc-950 border-b border-zinc-800 p-5 flex justify-between items-center">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <img
          src="https://i.pravatar.cc/100"
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <span>Admin</span>

      </div>

    </div>
  );
}

export default AdminNavbar;