import './Container.css'

export default function Container(props) {
    
    return(
        <div className='container' onContextMenu={(e) => e.preventDefault() }>{props.children}</div>
    )
}