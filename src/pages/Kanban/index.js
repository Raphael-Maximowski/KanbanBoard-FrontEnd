import './style.css'
import SideBar from "../../components/SideBarGroup/SideBar";
import Header from "../../components/HeaderGroup/HeaderContent";
import {Link} from "react-router-dom";
import KanbanSection from "../../components/KanbanGroup/KanbanSection";
import kanbansections from '../../data/KanbanSections.json'
import {useEffect} from "react";

const KanbanIndex = () => {

    const sections = kanbansections.kanbansections

    return(
        <>
            <div className={'Content'}>
                <SideBar />
                <div className={'Body'}>
                    <Header />
                    <div className={'ContentKanban'}>
                        <div className={'TopKanban'}>
                            <div id={'ActiveButton'} className={'Button'}>
                                <img src={'../../assets/KanbanPage/Board.png'} />
                                Board
                            </div>

                            <Link to={'/Calendario'}>
                                <div id={'DisableButton'} className={'Button'}>
                                    <img className={'DisableImage'} src={'../../assets/SideBar/Callendar.png'}/>
                                    <img className={'ActiveImage'} src={'../../assets/SideBar/ActiveCallendar.png'}/>
                                    Calendário
                                </div>
                            </Link>
                        </div>
                        <div className={'BodyKanban'}>
                            {sections.map(section => {
                                return < KanbanSection key={section.id} section={section}/>;
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KanbanIndex