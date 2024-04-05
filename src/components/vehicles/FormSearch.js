import React from 'react'

export const FormSearch = ({ clickFunction }) => {
  return (
    <>
      <form className="form-inline ">
        <div className='search-box'>
          <input className="form-control mr-sm-2" id='query-input' type="search" placeholder="Search" />
          <button onClick={e => clickFunction(e)} className="btn btn-outline-info my-2 my-sm-0" type="input">Search</button>
        </div>
      </form>
    </>
  )
}
