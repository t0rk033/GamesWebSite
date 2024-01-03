import React from 'react'
import './Home.css'
import GamesSwiper from '../components/GamesSwiper';
import GameCard from '../components/GameCard';


function Home({games}) {
  return (
      <section id="home" className="home active">
        <div className="container-fluid">
            <div className="row mb-4 mt-4">
                <GamesSwiper games={games}/>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="sectionTitle">Jogos em promoção</h2>
                </div>
                <div className="col-lg-6 d-flex justify-content-end align-items-center">
                    <a href="#" className='viewMore'>
                        Ver mais jogos <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="row">
                {
                    games.slice(0,4).map(game=>(
                        <GameCard key={game._id} game={game}/>
                    ))
                }
            </div>
        </div>
      </section>
  )
}

export default Home;
