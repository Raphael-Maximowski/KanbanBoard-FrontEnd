import './style.css'
import {useLocation} from "react-router-dom";

export default function SectionCard({section}){
    const url = useLocation();
    const DisableColor = '#bebec8'
    const ActiveColor = '#4289db'
    const BackGroundColor = '#f4f9ff'

    return (
       url.pathname === section.path ?
           <div style={{ backgroundColor:  BackGroundColor }} className={'ContentSectionCard'}>
                <div className={'IconSection'}><img src={section.active} /></div>
                <div><h4 style={{ color: ActiveColor }}>{section.name}</h4></div>
            </div> :
           <div className={'ContentSectionCard'}>
               <div className={'IconSection'}><img src={section.disable} /></div>
               <div><h4 style={{ color: DisableColor }} >{section.name}</h4></div>
           </div>
    )
}