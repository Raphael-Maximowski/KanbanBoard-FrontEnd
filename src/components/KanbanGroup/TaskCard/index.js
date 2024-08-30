import './style.css'

export default function TaskCard(){
    return (
        <div className={'BodyCard'}>
            <div className={'Title'}>
                <h4>Inserção Dados Banco MY SQL TESTE</h4>
            </div>
            <div className={'Description'}>
                <p>Task criada para a crição de algumas novass features na nossa empresa e bla bla bla </p>
            </div>
            <div className={'ExtraFeatures'}>
                <div className={'Icons1'}>
                    <div className={'ContentExtra'}>
                        <img src={'../../assets/KanbanPage/Marks.png'} />
                        <p>0</p>
                    </div>
                    <div className={'ContentExtra'}>
                        <img src={'../../assets/KanbanPage/Link.png'}/>
                        <p>0</p>
                    </div>
                </div>
                <div className={'Icons2'}>
                    <img src={'../../assets/SideBar/Callendar.png'}/>
                    <p className={'Date'}>Tomorrow</p>
                </div>
            </div>
        </div>
    )
}