import React, { useState } from 'react'
import { PlayerData } from './PlayerData';
import './Players.css';
// import { AiOutlineReload } from 'react-icons/ai';



const Players = () => {

    const [player, setPlayer] =useState();
    const [ reload, setReload ] =useState(false);
    const [Name, setName] = useState("");
    const [desh, setDesh] =useState("");
    const [img, setImg] =useState(false);
    const [gif, setGif] =useState(<h1 className='ranMsg' style={{color:"#fff"}} >Random Player</h1>);
    

  
    const handleClick =()=>{

        const folder_random = Math.floor(Math.random()*3)+1;
        // console.log(folder_random);
        setImg(false)
        setGif(<img className='image' src='https://i.ibb.co/qYYvcpv/istockphoto-531294703-1024x1024.gif' alt=''/>)

        setTimeout(()=>{

            if(folder_random===3){
                const ind_random = Math.floor(Math.random()*27);
               
                setPlayer(PlayerData[0]?.players[ind_random]?.imgsrc);
                setName(PlayerData[0]?.players[ind_random]?.name);
                setDesh(PlayerData[0]?.country);
                // console.log("India "+ind_random);
            }
             if(folder_random===2){
                const aus_random = Math.floor(Math.random()*5);
               
                setPlayer(PlayerData[1]?.players[aus_random]?.imgsrc);
                setName(PlayerData[1]?.players[aus_random]?.name);
                setDesh(PlayerData[1]?.country);
                // console.log("Australia "+aus_random);
            }
             if(folder_random===1){
                const eng_random = Math.floor(Math.random()*4);
    
                setPlayer(PlayerData[2]?.players[eng_random]?.imgsrc);
                setName(PlayerData[2]?.players[eng_random]?.name);
                setDesh(PlayerData[2]?.country);
                // console.log("England "+eng_random);
            }
    
            setImg(true);
            setReload(false)
        },3000);

        setReload(true);
    }



  
    return (
    <>
    <div className='playerDiv'>
        <div className='randomDiv'>
        <div className='playerImage'>
        { img?<> <img className='image' src={player} alt="player" /> 

        <div className='playerText'>
        <h1> {Name} </h1>
        <p> {desh} </p>
        </div>
        </>: gif }
        {/* <img className='image' src='https://i.ibb.co/qYYvcpv/istockphoto-531294703-1024x1024.gif' alt=''/> */}
        </div>
        <div className='btnDiv' style={reload? { backgroundColor: "#7F167F"}:[] } >
        <button disabled={reload} onClick={handleClick} 
        
        style={reload? {color:"white", display:"none" , backgroundColor:"white" }:{display:"block"} }

        > Sign </button>
        </div>
        {/* { reload && 
         <button title='Reload Page' className='reloadBtn' onClick={()=>window.location.reload(false);} > 
        <AiOutlineReload />
         </button> } */}
        </div>
    </div>
    </>
  )
}

export default Players
