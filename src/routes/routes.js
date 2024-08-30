import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Callendar from "../pages/Callendar";
import Error404 from "../pages/Error404";
import Kanban from "../pages/Kanban";

export default function AppRouter () {
    return (
            <Router>
                <Routes>
                    <Route path={'/'} element={<DashBoard />} />
                    <Route path={'/Kanban'} element={<Kanban />} />
                    <Route path={'/Calendario'} element={<Callendar />} />
                    <Route path={'*'} element={<Error404 />} />
                </Routes>
            </Router>
        )

}