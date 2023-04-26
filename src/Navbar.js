import {React,useState,useEffect} from 'react'
import './Navbar.css'

function Navbar() {
    const  [show,setShow]=useState(false)

    useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(window.scrollY>500){
        setShow(true)
    }
    else{
        setShow(false)
    }
})
    },[])
    console.log(show);
  return (
    <div className={`nav ${show && 'navBlack'}`}>
    <img
    style={{width:'170px'}}
    src='https://i.postimg.cc/WzsBwSCJ/netflix.png'
    />
    </div>
  )
}

export default Navbar