import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        position="top-center"
        gutter={10}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "#026ffa",
            backgroundColor: "#ffff",
          },
        }}
      />
    </div>
  );
}

export default AppLayout;
