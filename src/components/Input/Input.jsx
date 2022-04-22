import style from '../Input/Input.module.css'

const Input = (props)=>{
  
    return (
    <>
        <label className={style.label} id="label">
            Enter your bill amount: 
        </label>
        <br/>
        <br/>
        <input className={style.input1} 
        type="number" placeholder="Enter your bill amount" 
        value={props.value} onChange={props.change}/>
        <hr/>
        <br/>
       <span>
           <label  className={style.b}>
               <b>
                     How was our sevice?
               </b>
           </label>
           <select className={style.select} value={props.vselect} onChange={props.select}>
               <option>Please enter your experience</option>
                <option value='Excellent'>Excellent</option>
                <option value="Good">Good</option>
                <option value="Nice">Nice</option>
                <option value="Bad">Bad</option>
            </select>
            
            <input type="text" className={style.input2} placeholder="Customer name" value={props.value2} onChange={props.change2}/>
            <button className={style.button} onClick={props.click} >Click here</button>
        </span>
        <br/>
        <br/>
        <hr/>
    </>
    )
}
export default Input;