import "./index.css"
import DropDown from "./components/DropDown.jsx";
import {useState} from "react";



function App() {

    const options = ['0',1,2,3,4,5,6,7,8,9,10]


    const [totalSum, setTotalSum] = useState("0")

    const [selectPants, setSelectPants] = useState("0")
    const [selectShoes, setSelectShoes] = useState("0")



    const handlePantsClick = (option) => {
        setSelectPants(option)
        setTotalSum(  option * 50 + selectShoes * 25     )

    }

    const handleShoesClick = (option) => {
        setSelectShoes(option)
        setTotalSum(  selectPants * 50 + option * 25     )
    }




    return (

        <div className="bg-yellow-500 w-140 px-6 py-6 text-2xl	mx-auto	" >

            <div className="mb-3.5">

                <div className="border-2 border-red-900	border-b-0 px-3	py-1.5 flex justify-between	">
                    <div>Name</div>
                    <div className="ml-16">Quantity</div>
                    <div>Price/Each</div>
                </div>

                <div className="border-2 border-red-900	border-b-0 px-3	py-1.5 flex justify-between">
                    <div className="font-medium">Pants</div>
                    <div><DropDown options={options} selectPants={selectPants} onPants={handlePantsClick} /></div>
                    <div className="font-medium">$50</div>
                </div>

                <div className="border-2 border-red-900	px-3 py-1.5 flex justify-between">
                    <div className="font-medium">Shoes</div>
                    <div className="mr-1"><DropDown options={options} selectShoes={selectShoes} onShoes={handleShoesClick} /></div>
                    <div className="font-medium">$25</div>
                </div>

            </div>


            <div className="border-1 border-red-900	"></div>


            <div className=" flex px-3 py-1.5 ">
                <h1 className=" mr-1 ml-auto	">Total:</h1>
                <h1>${totalSum}</h1>
            </div>


        </div>

    )


}


export default App