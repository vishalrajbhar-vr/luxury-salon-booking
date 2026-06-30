import { useState } from "react";

import {
  FaTachometerAlt,
  FaCut,
  FaCalendarAlt,
  FaImages,
  FaChevronDown,
  FaChevronRight,
  FaPlus,
  FaEdit,
  FaImage,
} from "react-icons/fa";

function AdminSidebar({ activePage, setActivePage, }) {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <aside className="w-72 bg-zinc-950 border-r border-zinc-800 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-red-600 mb-10">
        Salon Admin
      </h1>

      <div className="space-y-3">

        {/* Dashboard */}
        <button
          onClick={() => setActivePage("dashboard")}
          className={`w-full flex items-center gap-3 p-4 rounded-xl transition ${activePage === "dashboard"
            ? "bg-red-600"
            : "bg-zinc-900 hover:bg-zinc-800"
            }`}
        >
          <FaTachometerAlt />
          Dashboard
        </button>

        {/* Services */}
        <div>

          <button
            onClick={() => setServiceOpen(!serviceOpen)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            <div className="flex items-center gap-3">
              <FaCut />
              Services
            </div>

            {serviceOpen ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </button>

          {serviceOpen && (
            <div className="ml-6 mt-2 space-y-2">

              <button
                onClick={() => setActivePage("addService")}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg ${activePage === "addService" ? "bg-red-600" : "bg-zinc-900 hover:bg-zinc-800"
                  }`}
              >
                <FaPlus />
                Add Service
              </button>

              <button
                onClick={() => setActivePage("allService")}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg ${activePage === "allService" ? "bg-red-600" : "bg-zinc-900 hover:bg-zinc-800"}`}>
                <FaEdit />
                All Service
              </button>

            </div>
          )}

        </div>

        {/* Appointments */}
        <button
          onClick={() => setActivePage("appointments")}
          className={`w-full flex items-center gap-3 p-4 rounded-xl transition ${activePage === "appointments"
            ? "bg-red-600"
            : "bg-zinc-900 hover:bg-zinc-800"
            }`}
        >
          <FaCalendarAlt />
          Appointments
        </button>

        {/* Gallery */}
        <div>

          <button
            onClick={() => setGalleryOpen(!galleryOpen)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            <div className="flex items-center gap-3">
              <FaImages />
              Gallery
            </div>

            {galleryOpen ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </button>

          {galleryOpen && (
            <div className="ml-6 mt-2 space-y-2">

              <button
                onClick={() => setActivePage("addGallery")}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg ${activePage === "addGallery"
                  ? "bg-red-600"
                  : "bg-zinc-900 hover:bg-zinc-800"
                  }`}
              >
                <FaPlus />
                Add Gallery
              </button>

              <button
                onClick={() => setActivePage("allGallery")}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg ${activePage === "allGallery"
                  ? "bg-red-600"
                  : "bg-zinc-900 hover:bg-zinc-800"
                  }`}
              >
                <FaImage />
                All Gallery
              </button>

            </div>
          )}

        </div>



        {/* Contact */}
        <button
          onClick={() => setActivePage("allcontact")}
          className={`w-full flex items-center gap-3 p-4 rounded-xl transition ${activePage === "allcontact"
            ? "bg-red-600"
            : "bg-zinc-900 hover:bg-zinc-800"
            }`}
        >
          <FaCalendarAlt />
          Contact
        </button>

        {/* --------------------------------------------------Appointment -----------------------------------------------------*/}
        {/* <div>

          <button
            onClick={() => setAppointmentOpen(!appointmentOpen)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            <div className="flex items-center gap-3">
              <FaCut />
              Appointment
            </div>

            {appointmentOpen ? (<FaChevronDown />) : (<FaChevronRight />)}
          </button>

          {appointmentOpen && (
            <div className="ml-6 mt-2 space-y-2">

              <button
                onClick={() => setActivePage("--------------")}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg ${activePage === "-----------" ? "bg-red-600" : "bg-zinc-900 hover:bg-zinc-800"
                  }`}
              >
                <FaPlus />
                conform Appointment
              </button>

              <button
                onClick={() => setActivePage("appointments")}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg ${activePage === "appointments" ? "bg-red-600" : "bg-zinc-900 hover:bg-zinc-800"}`} >
                <FaEdit />
                All Appointment
              </button>

            </div>
          )}

        </div> */}


      </div>

    </aside>
  );
}

export default AdminSidebar;