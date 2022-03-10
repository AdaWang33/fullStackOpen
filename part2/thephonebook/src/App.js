import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter/Filter'
import PersonForm from './components/PersonForm/PersonForm'
import Persons from './components/Persons/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  // Maintain the application's state and all event handlers in the App root component
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [keyword, setKeyWord] = useState('')
  const filteredPersons = persons.filter(person => person.name.toLowerCase().indexOf(keyword.toLowerCase())!==-1)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleOnNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleOnNumChange = (event) => {
    setNewNum(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameArray = persons.map(person => person.name)
    if (nameArray.indexOf(newName)!==-1) {
      // JS template way of inserting valuable within string
      alert(`${newName} is already added to phonebook`)
    } else {
      const personToAdd = {name: newName, number: newNum}
      const newPersons = persons.concat(personToAdd)
      setPersons(newPersons)
    }
    setNewName('')
    setNewNum('')
  }

  const handleFilter = (e) => {
    setKeyWord(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter keyword={keyword} handleFilter={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm 
        handleSubmit={handleSubmit} 
        handleOnNameChange={handleOnNameChange} 
        handleOnNumChange={handleOnNumChange}
        newName={newName}
        newNum={newNum}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App