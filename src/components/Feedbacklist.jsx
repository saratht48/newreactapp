import {useState} from 'react'
import Feedbackitem from './Feedbackitem'
const Feedbacklist=({feedback,setFeedback,feedbackedit,setFeedbackedit})=>{
    const delets=(id)=>{
       setFeedback(feedback.filter((item)=>{
           if(item.id !==id){
            return true;
           }
       }))
    }
    const edits=(id,item)=>{
        console.log(id);
        console.log(item);
        setFeedbackedit({
            state:true,
            feedbackobj:item
        })

            console.log('feedbackedit');
            console.log(feedbackedit);
       
       
    }
    return(
        <div>
       <div className="feedbackbox borderradius wb p-2">
       {
        feedback.map((item,index,thearray)=>{
            return(
               <Feedbackitem item={item} key={index} delets={delets} edits={edits}/>
            )
        })
       }
       </div>
        </div>
    )
}
export default Feedbacklist