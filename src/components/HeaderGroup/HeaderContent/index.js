import './style.css'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ModalNewTeam from "../ModalCreateTeam";
import {useState} from "react";


export default function Header(){

    const alert = () => {
        toast.info('Em Desenvolvimento!', {
            position: "bottom-right"
        })
    }

    const [ModalState, SetModalState] = useState(false)

    function ChangeModalState(){
        SetModalState(!ModalState)
    }
    return (
        <div className={'HeaderContent'}>
            <div className={'Hello'}>
                <div>
                    <h1>Olá Desenvolvedor</h1>
                    <h2>Seja bem vindo!</h2>
                </div>
            </div>
            <div className={'SearchBar'}>
                <input placeholder={"Pesquise por Seções ou Tarefas"} />
                <img src={'../../assets/Header/lupa.png'} />
                <button onClick={ChangeModalState}>Criar Time</button>
            </div>
            <div className={'Profile'}>
                    <img onClick={alert} className={'Notification'} src={'../../assets/Header/notificacao.png'}/>
                    <img onClick={alert} className={'ProfilePicture'} src={'../../assets/Header/user.png'}/>
            </div>
            <ModalNewTeam ModalState={ModalState} CloseModal={SetModalState}/>
        </div>
    )
}