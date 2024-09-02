import './style.css'
import InputSection from "../InputType";
import InputData from '../../../../../data/InputType.json'
import {useEffect, useState} from "react";

export default function IconsInput({SetterInfo, Active}) {

    const Inputs = InputData

    const [Status, SetStatus] = useState('Vazio')
    const [Data, SetData] = useState('Vazio')
    const [Time, SetTime] = useState('Vazio')
    const [Tags, SetTag] = useState('Vazio')
    const [Prioridade, SetPrioridade] = useState('Vazio')
    const [Atribuicao, SetAtribuicao] = useState('Vazio')


    const Setter = [
        SetStatus,
        SetData,
        SetTime,
        SetTag,
        SetPrioridade,
        SetAtribuicao
    ]

    const Values = [
        Status,
        Data,
        Time,
        Tags,
        Prioridade,
        Atribuicao
    ]

    useEffect(() => {
        if (Active) {
            const InputValues =
                {
                        Status: Status,
                        Data: Data,
                        Time: Time,
                        Tags: Tags,
                        Prioridade: Prioridade,
                        Atribuicao: Atribuicao,
                }

            SetterInfo(InputValues)
        }

    }, [Active]);

    return (
        <div className={'IconsContainer'}>
            <div>
                {
                    Inputs && Inputs.input && Array.isArray(Inputs.input) &&
                    Inputs.input
                        .filter(InputData => InputData.id > 0 && InputData.id < 4)
                        .map((FilterData, index) => {
                            return <InputSection value={Values[(FilterData.id) - 1]}
                                                 setter={Setter[(FilterData.id) - 1]}
                                                 key={index} data={FilterData}/>;
                        })
                }
            </div>
            <div>
                {
                    Inputs && Inputs.input && Array.isArray(Inputs.input) &&
                    Inputs.input
                        .filter(InputData => InputData.id > 3)
                        .map((FilterData, index) => {
                            return <InputSection value={Values[(FilterData.id) - 1]}
                                                 setter={Setter[(FilterData.id) - 1]}
                                                 key={index} data={FilterData}/>;
                        })
                }
            </div>
        </div>
    )
}