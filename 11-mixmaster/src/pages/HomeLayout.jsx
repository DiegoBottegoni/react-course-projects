import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? (
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              // marginTop: "2rem",
            }}
          >
            <div className="loading" />
          </div>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
