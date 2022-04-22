import style from './Output.module.css'
const Output = ({list, length, mon})=>{
const newList =list.map((item,index)=>(<li key={index}>{item}</li>))
    return (
    <>
        <div className={style.div}>
        <h2 align="center">
            Customer list
        </h2>
        < ol className={style.ol}>
            {newList}
            
        </ol>
        <br/>
    
        </div>
      
    </>
    )
}
 export default Output;