
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="bg-orange-50 flex flex-col min-h-screen">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}