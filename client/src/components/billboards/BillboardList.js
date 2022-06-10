import Billboard from './Billboard';

const BillboardList = ({ billboards, updateBillboard, deleteBillboard }) => (
  <>
    <h1>billboard Copy</h1>
    
    { billboards.map( p =>
      <Billboard
        key={p.id}
        {...p}
        updateBillboard={updateBillboard}
        deleteBillboard={deleteBillboard}
      />
    )}
  </>
)

export default BillboardList;