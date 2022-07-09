import React from 'react'
import './search.css'
export default function Search() {
  return (
    <div className='search'>
      <div class="input-group">
        <input type="search" class="form-control rounded" placeholder="Cari Nama Branch.." aria-label="Search" aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary">search</button>
      </div>
    </div>
  )
}
