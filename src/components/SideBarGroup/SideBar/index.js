import './style.css'
import SectionCard from "../SectionCard";
import SectionData from '../../../data/SideBarSections.json'
import {Link} from "react-router-dom";
import {useState} from "react";
import TeamCard from "../TeamCard";
import {useDispatch, useSelector} from "react-redux";
import {ChangeModalState} from "../../../store/reducers/team";

export default function SideBar() {
    const dispatch =  useDispatch()
    const SectionsList = SectionData.section;
    const Rotation = [180, 0]
    let TeamData = useSelector(state => state.Team)
    let Teams = TeamData[0]
    let TeamListState = TeamData[1]

    function ChangeListState(){
        dispatch(ChangeModalState(!TeamListState))
    }

    return (
        <div className={'SideBarContainer'}>
            <div className={'HeadSideBar'}>
                <div>
                    <h2>KANBAN</h2>
                    <h3>BOARD</h3>
                </div>
            </div>
            <div className={'ContentContainer'}>
                <div className={'TitleSection'}><h4>MENU</h4></div>
                <div className={'ContentSections'}>
                    {SectionsList.map(section => {
                        return <Link to={section.path} key={section.id}> <SectionCard section={section}/> </Link>
                    })}
                </div>
                <div id={'Team'} className={'TitleSection'}>
                    <div onClick={ChangeListState} className={'TeamContainer'}>
                        <h4>TIMES</h4>
                        {TeamListState ?
                            <img style={{ transform: `rotate(${Rotation[0]}deg)`, transition: 'transform 0.5s ease', }}  src={'../../assets/SideBar/DownArrow.png'}/> :
                            <img style={{ transform: `rotate(${Rotation[1]}deg)`, transition: 'transform 0.5s ease', }} src={'../../assets/SideBar/DownArrow.png'}/>
                        }
                    </div>
                    {Teams.map((team) => (
                        <TeamCard
                            key={team.team.id}
                            Team={team}
                            State={TeamListState}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}