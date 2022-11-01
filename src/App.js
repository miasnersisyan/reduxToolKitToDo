
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { changeData } from './redux/data/dataSlicer';

function App() {

  const data = useSelector((state) => state.data.allData)

  const dispatch = useDispatch()
  let complatedToDo = data.filter((elm) => elm.complated ).length

  let myRef = useRef()
  

  return (
    <div className="App">
      <div className='w1'>
       <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(changeData([
          ...data,
          {text : myRef.current.value,complated : false,id : Math.random()}
        ]))
        myRef.current.value = ''
       }}>
        <input className='inp1' type='text' ref={myRef}  />
       </form>

       {
        data.map((elm) => {
          return (
            <div className='w2' key={elm.id}>
            <input type='checkbox' className='checkInp' onChange={(e) => {
                dispatch(changeData(data.map((d) => {
                   if(d.id === elm.id){
                    return{
                      ...elm,
                      complated : e.target.checked
                    }
                   }
                   return d
                })))
            }}/>
            <span className='sp1'>{elm.text}</span>
            <span className='sp2' onClick={() => {
              dispatch(changeData(data.filter((d) => d.id !== elm.id)))
            }}>X</span>
           </div>
          )
        })
       }

      

       <div className='w3'>
         <span className='sp3'>{data.length} / {complatedToDo}</span>
         <button className='btn1' onClick={() => {
          dispatch(changeData(data.filter((elm) => {
            if(elm.complated === false){
              return elm
            }
          })))
         }}>clear complated</button>
       </div>
      </div>
    </div>
  );
}

export default App;
