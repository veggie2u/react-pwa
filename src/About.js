import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import {SpellInput} from './SpellInput' 
const About = () => {
  const [spells, setSpells] = useState([])
  const [newSpellName, setNewSpellName] = useState('')

  useEffect(() => {
    // const fetchData = async () => {
    //   const db = firebase.firestore()
    //   const data = await db.collection("spells").get()
    //   setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
    // }
  const db = firebase.firestore()
    const unsubscribe = db.collection('spells').onSnapshot((snapshot) => {
      const spellsData = []
      snapshot.forEach(doc => spellsData.push(({ ...doc.data(), id: doc.id})))
      setSpells(spellsData)
    })
    return unsubscribe
  }, []);

  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('spells').add({name: newSpellName})
  }

  return(
    <React.Fragment>
      <h1>This is a PWA</h1>
      <ul>
      <input value={newSpellName} onChange={(e) => setNewSpellName(e.target.value)}/>
      <button onClick={onCreate}>Create</button>
        {spells.map(spell => (
          <li key={spell.name}>
            <SpellInput spell={spell}/>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default About;
