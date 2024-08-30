import './style.css'
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Select from 'react-select'


export default function InputSection({data, setter, value}){

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
                                        onChange={([selectedDate]) => {
                                            setter(selectedDate);
                                        }}
                                    />

                                    : data.input === "date" && data.name === "Duração" ?
                                        <Flatpickr
                                            value={"00:00"}
                                            onClick={handleInputClick}
                                            options={{ enableTime: true, noCalendar: true,  dateFormat: 'H:i',  time_24hr: true, }}
                                            onChange={([selectedDate]) => {
                                                setter(selectedDate);
                                            }}
                                        />
                                        : <div >
                                            <select onClick={handleData} className={'select-box'}>
                                                {options.map((option, index) => {
                                                    return <option value={option.name} key={index}>{option.name}</option>})}
                                            </select>
                                          </div>
                            }
                        </div>}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}