import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-12 p-5">
      <Outlet />
      </main>
      
    </>
  );
};

export default AuthLayout;
