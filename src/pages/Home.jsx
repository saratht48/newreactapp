import {useState} from 'react'
import Feedbackform from '../components/Feedbackform'
import Feedbacklist from '../components/Feedbacklist'



const Home=()=>{
  const[feedbackedit,setFeedbackedit]=useState({
    state:false,
    feedbackobj:{}
  })
  const [feedback,setFeedback]=useState([
    {
      text:'nice application',
      rating:'1',
      id:0,
      
    },
    {
      text:'good application',
      rating:'5',
      id:1,

    },
    {
      text:'super application',
      rating:'7',
      id:2,
    },
    {
      text:'crazy application',
      rating:'9',
      id:3,
    },
    {
      text:'user friendly application',
      rating:'10',
      id:4,
    },
  
  ])
    return(
      <div className="bg-shade pb-3">
      <Feedbackform feedback={feedback} setFeedback={setFeedback} feedbackedit={feedbackedit} setFeedbackedit={setFeedbackedit} />
      <Feedbacklist feedback={feedback} setFeedback={setFeedback} feedbackedit={feedbackedit} setFeedbackedit={setFeedbackedit} />
      </div>
    )
}
export default Home