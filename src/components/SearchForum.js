import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm, searchTerm} = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus()
    searchValue.current.value = searchTerm;
  }, [])

  const searchCocktail = ()=>{
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <section className='section-search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='forum-control'>
          <label htmlFor='name'>search your favourite  </label>
          <input type='text' id='name' ref={searchValue} onChange={searchCocktail}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm