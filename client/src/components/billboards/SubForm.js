import { useState, useEffect } from 'react';

const SubForm = ({ addBillboard, id, setEdit, title, updateBillboard }) => {
  const [billboard, setBillboard] = useState({ playlist_name: '' })

  
  useEffect( () => {
    if (id) {
   
      setBillboard({ title })
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
      <h1>{ id ? 'Edit' : 'Add' } Billboard</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          
          name='title' 
          value={billboard.title}
          
          onChange={(e) => setBillboard({ ...billboard, title: e.target.value })}
         
          
          placeholder='title'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SubForm;