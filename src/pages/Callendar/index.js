import './style.css'
import SideBar from "../../components/SideBarGroup/SideBar";
import Header from "../../components/HeaderGroup/HeaderContent";

export default function Callendar(){
    return (
        <>
            <div className={'Content'}>
                <SideBar />
                <div className={'Body'}>
                    <Header />
                </div>
            </div>
        </>
    )
}