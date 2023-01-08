import React from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Header } from '../Layout'
import MainContainer from '../Layout/MainContainer'
import axios from 'axios';

function SolveSpesificTest() {





  const [isLoading,setIsLoading] = React.useState(true);
  const [test_obj,setTestObj] = React.useState({});

  const {accessToken} = useParams();

  React.useEffect(() => {
    axios.get(`http://localhost:5000/getTest/${accessToken}`).then((res,req) => {
      console.log(res.data[0]);
      setTestObj(res.data[0]);
      setIsLoading(false);
    }).catch(err => {console.log(err)});
  },[])




  if(!isLoading){
    return (
      <MainContainer>
          <Header />
          <div className='text-2xl block'>
            
            <div className='flex justify-center text-center items-center mt-2'>
              <div className='mt-2'>
                <span className='font-bold font-poppins'>Welcome to </span>
                <h1 className=' bg-highlight mt-2 p-2 text-white_main font-bold rounded-md'>{test_obj.title}</h1>
              </div>
            </div>

            {test_obj.questions.map(question => {
              return (
                <div className='bg-secondary my-2 p-2' key={question._id}>
                  <hr className="text-highlight my-8" />
                  <div className='flex'>
                    <span className='mx-2'>Question : </span>
                    <h3 className=''>{question.title}</h3>
                    <span className='mx-2'> ?</span>
                  </div>

                <ul className='mt-4'>
                  {question.choices.map(choice => {
                    return (
                      <li className='hover:bg-white_main' key={choice.id}>
                        <input className='mx-3' type="radio" name={question.title} />
                        <span className=''>{choice.title}</span>
                      </li>
                    )
                  })}
                </ul>
                <hr className="text-highlight my-8" />
                </div>
              )
            })}
            <div className='flex justify-center'>
              <button className='bg-highlight p-2 text-3xl font-bold text-white_main rounded-xl hover:bg-tertiary transition-colors' onClick={e => {console.log(e)}}>Submit Test</button>
            </div>

          </div>
          <Footer />
      </MainContainer>
    )
  }
  

  }



export default SolveSpesificTest