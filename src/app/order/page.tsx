import Header from "./components/header";
import Sidebar from "./components/sideBar";
import MainContent from "./components/mainContent";
import './index.css'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <MainContent />
      </div>
    </main>
  );
}
