import { useState, useEffect } from 'react';
import BillboardForm from "./BillboardForm";


const Billboard = ({ id, playlist_name, description, picture, created_at, updateBillboard, deleteBillboard}) => {
  const [editing, setEdit] = useState(false)
  
  return (
      <>
        <h1>Billboard.js</h1>
        <h1>Playlist: { playlist_name } ID:{id}</h1>
        
        <img src={ picture } />
        <p>Description: { description }</p>
        <p>
          Created: { created_at }
        </p>

        {/* <button onClick={() => updateBillboard(id)}>
          Edit
        </button>

        <button onClick={() => deleteBillboard(id)}>
          Delete
        </button> */}
        
        { editing ?
        <>
          <BillboardForm 
            id={id}
            playlist_name={playlist_name}
            picture={picture}
            description={description}
            updateBillboard={updateBillboard}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteBillboard(id)}>Delete</button>
          
        </>
      }
        
      </>
    )
  }
  
  export default Billboard;