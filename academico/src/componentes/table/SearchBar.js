import React from 'react'

const SearchBar = ({searchTerm, setSearchTerm, recordsPerPage, handleRecordsPerPageChange}) => {
  return (
    <>
      <div className='records'>
        <div className='input-search'>
            <label
                htmlFor='searchTerm' 
                className='app-label'
            >
                Pesquisa:
            </label>
            <input 
                type="text" 
                id='searchTerm'
                placeholder='Buscar Registro...' 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
        </div>
        <div className='select-page'>
            <label 
                htmlFor='recordsPerPage' 
                className='app-label'
                value={recordsPerPage}
                onChange={(e) => handleRecordsPerPageChange(e)}
            >
                Registros por página: 
            </label>
            <select 
                id='recordsPerPage' 
                className='app-label'
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
        </div>
      </div>
    </>
  )
}

export default SearchBar
