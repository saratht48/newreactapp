import {useEffect, useState} from 'react'
import uuid from 'react-uuid'
const Feedbackform=({feedback,setFeedback,feedbackedit,setFeedbackedit})=>{


    useEffect(()=>{
        debugger
        console.log('latest');
        console.log(feedbackedit)
        console.log(feedbackedit.feedbackobj.text);
        if(feedbackedit.state===true){
            setText(feedbackedit.feedbackobj.text);
        }
    },[feedbackedit])
    const [text,setText] =useState('');
    const [message,setMessage]=useState(false);
    const[disabled,setDisabled]=useState(true);



    const changed=(e)=>{
        const value=e.target.value;
        if(value.length===0){
  
            setDisabled(true)
        }
        else if(value.length<10){
            setDisabled(true)
            setMessage(true)
        }else{
            setDisabled(false)
            setMessage(false)
        }
        setText(value);
    }

    const submit=()=>{
        debugger
        if(text.length>10){

            if(feedbackedit.state===true){
                console.log('checking');
                console.log(feedbackedit.feedbackobj)
                 const newfeedback=  feedback.map((item)=>{
                         return(item.id===feedbackedit.feedbackobj.id?feedbackedit.feedbackobj:item)
                   })
                  console.log(newfeedback);
                   setFeedback(newfeedback);


                setFeedbackedit({
                    state:false,
                    feedbackobj:{}
                })
            }else{
                const obj={
                    text,
                    rating:'7',
                    id:uuid()
               }
               setFeedback([obj,...feedback])
               console.log(obj);
               console.log(feedback);
            }
         
           setText('');
        }
    }
    return(
        <div className="py-3" >
    <div className="feedbackbox mt-3 wb p-2 ">
    <h2 className="text-center bold mb-3">Submit your review</h2>
    <input className="inputstyle mb-3" onChange={changed} type="text" value={text}></input><button onClick={submit}  disabled={disabled} className="btn btn-primary px-4 mb-0">submit</button>
    {
        message && (<h3 className="text-center">please enter atleast 10 character</h3>)
    }

    </div>
        </div>
    )
}
export default Feedbackform