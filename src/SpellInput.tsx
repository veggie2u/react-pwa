import React, {useState} from 'react'
import firebase from './firebase'

export type Spell = {
  id: string,
  name: string
}

export const SpellInput: React.FC<Spell> = (spell) => {
  const [name, setName] = useState(spell.name)
  
  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('spells').doc(spell.id).set({ ...spell, name})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('spells').doc(spell.id).delete()
  }

  return(
    <React.Fragment>
      <input value={name} onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </React.Fragment>
  );
}

export default SpellInput
