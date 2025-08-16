import { useOutletContext } from "react-router"


export default function weight() {

    const { result } = useOutletContext()

    return (
        <>
            <label htmlFor="">Convertir de:</label>
            <div className='w-full flex gap-4'>
                <input type="number" step="any" name='amount' className='bg-gray-100 outline-none border-2 border-black rounded' />
                <select name="unit" id="">
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value="Kelvin">Kelvin</option>
                </select>
            </div>
            <label htmlFor="" className='inline-block mt-10'>Hacia:</label>
            <select name="targetUnit" id="">
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
            <input type="submit" value="Convertir" className='absolute left-1/2 -translate-1/2 cursor-pointer bottom-8 p-2 bg-white text-black font-medium rounded block mt-6 hover:bg-gray-200 transition-all ' />
            {result && (
                <div className='mt-3'>Resultado: {result.amount} {result.unit}</div>
            )}
        </>
    )
}
