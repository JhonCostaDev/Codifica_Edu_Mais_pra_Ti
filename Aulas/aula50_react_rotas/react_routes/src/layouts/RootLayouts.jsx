import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"

export default function RootLayouts() {
    return (
        <div 
        style={
            {fontFamily: "system-ui, Arial", lineHeight: 1.5}
        }>
            <NavBar />
            
            <main style={{ padding: 16 }}>
                <Outlet />
            </main>
        </div>
    )
}