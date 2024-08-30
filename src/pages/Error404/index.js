import './style.css'
import {Link} from "react-router-dom";
export default function Error404(){
    return(
        <>
            <div className={'BodyError'}>
                <div className={'ContainerError'}>
                    <div className={'Block1'}>
                        <img src={'../../assets/Error404/404.png'}/>
                    </div>
                    <div className={'Block2'}>
                        <h1>404</h1>
                        <h2>Desculpe explorador, não encontramos seu destino!</h2>
                        <div className={'ButtonContainer'}>
                            <Link to={'/'}>
                                <button>Retornar</button>
                            </Link>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}