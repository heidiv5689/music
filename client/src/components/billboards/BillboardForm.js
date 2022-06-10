import { useState, useEffect } from 'react';

const BillboardForm = ({ addBillboard, id, setEdit, updateBillboard, playlist_name, description, picture }) => {
  const [billboard, setBillboard] = useState({ playlist_name: '', description: '', picture: ''})

  
  useEffect( () => {
    if (id) {
   
      setBillboard({ playlist_name, description, picture })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault() 
    if (id) {
  
      updateBillboard(id, billboard) 
      setEdit(false) 
    } else {
    
      addBillboard(billboard)
    }
   
    setBillboard({ title: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Add' } Sub Billboard form</h1>
      <form onSubmit={handleSubmit}>
        <label>Playlist Name:</label>
        <input 
          
          name='playlist_name' 
          value={billboard.playlist_name}
          
          onChange={(e) => setBillboard({ ...billboard, playlist_name: e.target.value })}
         
          
          placeholder='play list name'
        />

      <label>Picture</label>
        <input 
          
          name='picture' 
          value={billboard.picture}
          
          onChange={(e) => setBillboard({ ...billboard, picture: e.target.value })}
         
          placeholder='picture'
        />

      <label>Description</label>
      <textarea
      name='description' 
      value={billboard.description}
      
      onChange={(e) => setBillboard({ ...billboard, description: e.target.value })}
     
      placeholder='description'
      
      ></textarea>
        
        
      

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default BillboardForm;