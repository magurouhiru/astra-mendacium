import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import "@/index.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="px-4 py-6">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
