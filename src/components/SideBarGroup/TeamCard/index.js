import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {ChangeTeam} from "../../../store/reducers/user";

export default function TeamCard({State, Team}){
    const dispatch = useDispatch()
    const User = useSelector(state => state.User)
    function ChangeUserTeam(){
        dispatch(ChangeTeam(Team.team.id))
    }

    return(
        State ?
            <div onClick={ChangeUserTeam} className={'ContainerTeam'}>
                {
                    User.teamId === Team.team.id ?
                        <>
                            <img src={'../../assets/SideBar/ActiveGroup.png'}/>
                            <h5 className={'ActiveColor'}>{Team.team.name}</h5>
                        </> :
                        <>
                            <img src={'../../assets/SideBar/Group.png'}/>
                            <h5 className={'DisableColor'}>{Team.team.name}</h5>
                        </>

                }
            </div>
            : ''
    )
}
