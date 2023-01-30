import React, {createRef, useEffect, useState} from 'react';
import axios from "axios";

function Registration(props) {
    let voterName = createRef()
    let voterFaculty = createRef()
    let [tokens, setTokens] = useState([])
    let [url, setUrl] = useState('')

    let getTokens = async () => {
      await axios.post('https://obscure-bastion-38165.herokuapp.com/api/gettokens', {
            number: 1,
            faculty: voterFaculty.current.value
        }).then(r => {
            console.log(r.data)
            setTokens(r.data)
        })
    }


    useEffect(() => {
        setUrl(`${tokens[0]}`)
    }, [tokens])



    let getVotings = async () => {
      let response = await axios.post('https://obscure-bastion-38165.herokuapp.com/api/getvotings', {
            faculty: voterFaculty.current.value
        })
        console.log(response.data)
    }




    return (
        <div>
            <input type="text" ref={voterName}/>
            <input type="text" ref={voterFaculty}/>
            <button onClick={getTokens}>Get Tokens</button>
            {/*<button onClick={goVote}>VOTE</button>*/}
            {/*<button>GET TOKENS</button>*/}
            <button onClick={getVotings}>GET VOTINGS</button>
        <a href={`https://obscure-bastion-38165.herokuapp.com/test/${url}`} target="_blank" rel="noopener noreferrer">TEST</a>
      
        </div>
    );
}

export default Registration;