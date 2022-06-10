import { useState, useEffect } from 'react';
import SubForm from "./SubForm";


const Billboard = ({ id, playlist_name, description, picture, created_at, deleteBillboard, updateBillboard}) => {
  const [editing, setEdit] = useState(false)
  return (
      <li>
        <h1>Playlist: { playlist_name }</h1>
        <h3>Picture: { picture }</h3>
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
          <SubForm 
            id={id}
            title={playlist_name}
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
        
      </li>
    )
  }
  
  export default Billboard;