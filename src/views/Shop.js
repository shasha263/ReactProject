import React, { useEffect, useState } from "react";
import axios from "axios";



const Shop = props => {
    useEffect(() => { console.log(`Shop component rendered or rerendered!`) });
    
    const getPlayerData = async () => {
        
        let response = await axios.get('https://foxes78api.herokuapp.com/api/players');
        return response.data
    }
    
    const loadPlayerData = async () => {
        let data = await getPlayerData();
        setPlayers(data);
    }
    const [players, setPlayers] = useState(() => loadPlayerData());

    const modifyPlayers=() => {
        let newPlayers=[...players];
        newPlayers.splice(0,1);
        newPlayers.push(players[0]);
        setPlayers(newPlayers);
    }
    return (
        <div className='shop'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h1>This will be the Shop</h1>
                </div>
                <div className="row justify-content-center">
                    {}
                    {typeof players=='object'}
                    {
                        Object.values(players).map((player, index) => {
                            return <div key={index} className="card m-3" style={{ width: 18 + 'rem' }}>
                                <img src={player.image} className="card-img-top" src="..." alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{`${player.first_name} ${player.last_name}`}</h5>
                                    <p className="card-text">{`${player.number} ${player.position} ${player.team} ${player.nationality}`}</p>
                                    <button className="btn btn-primary" onclick={modifyPlayers}>{`${player.transfer_cost}`}</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>

    )
};
export default Shop;