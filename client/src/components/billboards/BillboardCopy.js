import { useEffect, useState } from 'react';
import axios from 'axios';
import Billboard from './Billboard';
import BillboardNew from './BillboardNew';

// import '../App.css';

const BillboardCopy = ({}) => {
  const [billboards, setBillboards] = useState([])

  useEffect( () => {
    axios.get('/api/billboards')
      .then( res => setBillboards(res.data) )
      .catch( err => console.log(err))
  }, [])
  
  const addBillboard = (billboard) => {
    axios.post('/api/billboards', { billboard })
      .then( res => setBillboards([...billboards, res.data]))
      .catch( err => console.log(err))
  }

  const deleteBillboard = (id) => {
    axios.delete(`/api/billboards/${id}`)
      .then( res => setBillboards(billboards.filter( p => p.id !== id) ))
      .catch( err => console.log(err))
  }
  
  
  const updateBillboard = (id, billboard) => {
    axios.put(`/api/billboards/${id}`, { billboard })
      .then( res => {
        const newUpdatedBillboards = billboards.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setBillboards(newUpdatedBillboards)
      })
      .catch( err => console.log(err) )
  }

  
  return (
    <>
  
      <h1>billboard Copy</h1>
      <BillboardNew addBillboard={addBillboard} />
      <ul>
        { billboards.map( p => (
            <Billboard 
              key={p.id} 
              {...p} 
              updateBillboard={updateBillboard}
              deleteBillboard={deleteBillboard} 
              />
          ))
          
        }
      </ul>
    </>
  )
}

export default BillboardCopy;