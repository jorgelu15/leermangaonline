import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return ( 
        <main className="container-general">
            <div className="width-page">
                <Outlet />
            </div>
        </main>
     );
}
 
export default AuthLayout;