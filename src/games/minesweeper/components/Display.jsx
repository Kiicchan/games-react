import "./Display.css";
export default function Display({value}) {
    return (
        <div className='display'>
            <div className='placeholder text'>{'888'}</div>
            <div className='text'>{stringFormat(value)}</div>
        </div>
    )
}

const stringFormat = (value) => {
    if (value < -99) {
        return '-99'
    } else if (value < -9) {
        return value.toString()
    } else if (value < 0) {
        return '0' + value
    } else if (value < 10) {
        return '00' + value
    } else if (value < 100) {
        return '0' + value
    } else {
       return value.toString() 
    }
}