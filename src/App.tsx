import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import "@/index.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
