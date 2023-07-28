import React from 'react'
import './start.css'
import PFC from '../../assets/pfc.png'
import DQS from '../../assets/dqs.png'

const start = () => {
  return (
    <section>
        <div className="start__container">
            <h1 className='title'>DEKASI</h1>
            <div className='choice__container'>
                <img className='image__game' src={PFC}/>
                <button className='btn btn-play'>Sélectionner votre jeu</button>
                <img className='image__game' src={DQS} />
            </div>
        </div>
    </section>
  )
}

export default start