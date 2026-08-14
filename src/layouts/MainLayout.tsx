import { Outlet } from "react-router-dom";
import  NavBar  from "../components/NavBar";
import Footer from "../components/Footer";
export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className=" bg-white sticky top-0 z-50">
        <NavBar />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};