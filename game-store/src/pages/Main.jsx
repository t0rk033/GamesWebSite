import React, { useState, useEffect, useRef } from 'react'
import './Main.css'
import SideMenu from '../components/sideMenu';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag';
function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);
  
  const categoriesRef = useRef();
  const homeRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections =[
    {
      name: 'home',
      ref: homeRef,
      active: true,

    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false,

    },
    {
      name: 'library',
      ref: libraryRef,
      active: false,

    },
    {
      name: 'bag',
      ref: bagRef,
      active: false,

    }

  ]

  const handelToggleActive = ()=>{
    setActive(!active);
  }

  const handleSectionsActive = target => {
    sections.map(section=>{
      console.log(section.ref.current)
    })
  }

  const fetchData=()=>{
    fetch('http://localhost:3000/api/gamesData.json')
    .then(res=>res.json())
    .then(data=>{
      setGames(data)
    })
    .catch(e => console.log(e.message))
  }
useEffect(()=>{
  fetchData();
},[])
  return (
       <main>
        <SideMenu active={active}/>
        <div className={`banner ${active ? 'active ': undefined}`}>
          <Header toggleActive={handelToggleActive} />
          <div className="container-fluid">
            <Home games={games} reference={homeRef}/>
            <Categories games={games} reference={categoriesRef} />
            <MyLibrary games={games} reference={libraryRef}/>
            <Bag games={games} reference={bagRef} />
          </div>
        </div>
      </main>
  )
}

export default Main;
