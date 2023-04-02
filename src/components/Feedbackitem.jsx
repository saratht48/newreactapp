import {useState} from 'react'
const Feedbackitem=({item,delets,edits})=>{
   
    return(
      <div className="box bg-shade p-2 mb-2 p-r">
      <div className="display-flex justifycontent-spacebetweeb p-a absolute">
      <button className="btn px-3 py-2 delete" onClick={()=>delets(item.id)}>delete</button>
      <button className="btn px-3 py-2 edit" onClick={()=>edits(item.id,item)}>edit</button>
      </div>
      <h4 className="mb-2">review is: {item.text}</h4>
      <h5 >rating is:{item.rating}</h5>
      </div>
    )
}
export default Feedbackitem