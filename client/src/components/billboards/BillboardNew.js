import { useState } from 'react';

const BillboardNew = ({ addBillboard }) => {
  const [billboard, setBillboard] = useState({ playlist_name: '', description: '', picture: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addBillboard(billboard)
    setBillboard({ playlist_name: '', description: '', picture: '' })
  }

  return (
    <>
      <h1>New Billboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Play List'
          type='text'
          name='title'
          value={billboard.playlist_name}
          onChange={(e) => setBillboard({ ...billboard, playlist_name: e.target.value })}
          required
        />
        <input
          placeholder='Description'
          type='text'
          name='description'
          value={billboard.description}
          onChange={(e) => setBillboard({ ...billboard, description: e.target.value })}
          required
        />
        <textarea
          placeholder='Picture'
          name='picture'
          value={billboard.picture}
          onChange={(e) => setBillboard({ ...billboard, picture: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default BillboardNew;