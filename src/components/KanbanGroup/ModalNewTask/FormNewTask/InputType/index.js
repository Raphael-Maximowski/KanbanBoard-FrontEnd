import './style.css'
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default function InputSection({data, setter, value, kanbanid}){

    const [InputMode, SetInputMode] =  useState(false)

    let  minDate= new Date()

    const options = data.selector

    function ActiveInput(){
        if (data.name === 'Atribuições') {
            toast.info("Em Desenvolvimento!", {
                position: "bottom-right",
                autoClose: 5000
            })
        } else {
            SetInputMode(!InputMode)
        }
    }

    function handleData(event) {
        setter(event.target.value)
    }

    function handleInputClick(event) {
        event.stopPropagation();
    }

    const handleDateChange = ([selectedDate]) => {
        const formattedDate = selectedDate.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        setter(formattedDate);
    };

    const handleTimeChange = ([selectedDate]) => {
        const date = new Date(selectedDate);

        const hours = date.getHours().toString().padStart(2, '0');  // Adiciona zero à esquerda, se necessário
        const minutes = date.getMinutes().toString().padStart(2, '0');  // Adiciona zero à esquerda, se necessário
        const timeString = `${hours}:${minutes}`;
        setter(timeString)
    };

    function HandleSelectData(event){
        const selectedOption = JSON.parse(event.target.value);
        setter(selectedOption.name)
        if (selectedOption.id !== undefined) {
            kanbanid(selectedOption.id)
        }
    }


    return(
        <>
            <div onClick={ActiveInput} className={'InputContainer'}>
                <img src={data.path} />
                <p>{data.name}</p>
                <div className={'InsertInfo'}>
                    { InputMode === false ?
                        <p>{value}</p>
                        : <div>
                            {data.input === "text" ?
                                <input onChange={handleData} onClick={handleInputClick} type={"text"} />
                                : data.input === "date" && data.name === "Data" ?
                                    <Flatpickr

                                        onClick={handleInputClick}
                                        options={{ enableTime: false, minDate: minDate, dateFormat: 'd/m/y'}}
                                        onChange={handleDateChange}
                                    />

                                    : data.input === "date" && data.name === "Duração" ?
                                        <Flatpickr
                                            value={"00:00"}
                                            onClick={handleInputClick}
                                            options={{ enableTime: true, noCalendar: true,  dateFormat: 'H:i',  time_24hr: true, }}
                                            onChange={handleTimeChange}
                                        />
                                        : <div >
                                            <select onClick={HandleSelectData} className={'select-box'}>
                                                {options.map((option, index) => {
                                                    return <option value={JSON.stringify(option)}  key={index}>{option.name}</option>})}
                                            </select>
                                          </div>
                            }
                        </div>}
                </div>
            </div>
        </>
    )
}