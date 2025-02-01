import { GoChevronDown } from "react-icons/go";
import {useState, useRef, useEffect} from "react";
import classnames from "classnames"




function DropDown({options, selectShoes, selectPants, onPants, onShoes}) {


    const selectClasses = classnames("border flex justify-between w-20 py-0.5 px-2 items-center cursor-pointer relative")
    const optionsClasses = classnames("border flex justify-center w-20 py-0.5 px-2 border-b-0 last:border-b-1 first:border-t-0 cursor-pointer hover:bg-gray-300")



    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()


    useEffect( () => {
        const handler = (event) => {
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("click", handler, true)

        return () => {
            document.removeEventListener("click", handler)
        }

    }, []    )



    const handleSelectClick = () => {
        setIsOpen(!isOpen)

    }


    const handleOptionClick = (option) => {
        selectShoes ? onShoes(option) : onPants(option)
        setIsOpen(!isOpen)
    }




    const renderedOptions = options.map(function (option, index) {
        return <div onClick={ () => { handleOptionClick(option) } }
                    className={optionsClasses}
                    key={index}>
                    {option}
               </div>
    })


    return (
        <div ref={divEl} className="relative">
            <div className={selectClasses} onClick={handleSelectClick}>
                {selectShoes || selectPants }
                <GoChevronDown/>
            </div>
            <div className="absolute bg-yellow-500 z-2">
                {isOpen && renderedOptions}
            </div>
        </div>

    )

}



export default DropDown