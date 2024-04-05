import React from 'react'

export const FormSearch = ({ clickFunction, queryInput }) => {

  return (
    <>
      <form className="form-inline" onSubmit={e => clickFunction(e)}>
        <div className='search-box'>
          <input className="form-control mr-sm-2" ref={queryInput} id='query-input' type="search" placeholder="Search" />
          <button className="btn btn-outline-info my-2 my-sm-0" type="input">Search</button>
        </div>
      </form>
    </>
  )
}
