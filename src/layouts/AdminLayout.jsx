import { useState } from "react";
import Dashboard from "../admin/pages/Dashboard";
import AddService from "../admin/pages/AddService";
// import EditService from "../admin/pages/AllService";
import Appointments from "../admin/pages/Appointments";
import AddGallery from "../admin/pages/AddGallery";
import AllGallery from "../admin/pages/AllGallery";
import AdminNavbar from "../admin/components/AdminNavbar";
import AdminSidebar from "../admin/components/AdminSidebar";
import AllService from "../admin/pages/AllService";
import AllContact from "../admin/pages/Allcontact";

function AdminLayout() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {

      // Dashboard
      case "dashboard":
        return <Dashboard />;

      // Services
      case "addService":
        return <AddService />;

      case "allService":
        return <AllService onAddServiceClick={() => setActivePage("addService")} />;

      // Appointments
      case "appointments":
        return <Appointments />;

      // Gallery
      case "addGallery":
        return <AddGallery />;

      case "allGallery":
        return <AllGallery onAddGalleryClick={() => setActivePage("addGallery")} />;

      // Appointments
      case "allcontact":
        return <AllContact />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-72 z-50">
        <AdminSidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>

      {/* Main Area */}
      <div className="ml-72">

        {/* Navbar */}
        <div className="fixed top-0 left-72 right-0 z-40">
          <AdminNavbar />
        </div>

        {/* Page Content */}
        <main className="pt-24 p-6 min-h-screen">
          {renderPage()}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;