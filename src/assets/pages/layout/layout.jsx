import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"
import './layout.css';
function Layout() {
    return (
       <div id="root">
       <Header />
       <main>
          <Outlet />
       </main>
       {/* <Footer /> */}
       </div>
    )
}

export default Layout
