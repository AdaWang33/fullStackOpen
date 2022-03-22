import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter/Filter'
import PersonForm from './components/PersonForm/PersonForm'
import Persons from './components/Persons/Persons'
import personService from './services/persons'
import Notification from './components/Notification/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState('')
  const [style, setStyle] = useState({})
  // Maintain the application's state and all event handlers in the App root component
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [keyword, setKeyWord] = useState('')
  const filteredPersons = persons.filter(person => person.name.toLowerCase().indexOf(keyword.toLowerCase())!==-1)

  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10        
  }

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10        
  }

  useEffect(() => {
    personService.getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const handleDelete = (id) => {
    if (window.confirm(`Delete ${persons.filter(person => person.id===id)[0].name}?`)) {
       personService.deleteMethod(id)
    .then( response => {
        setPersons(persons.filter(person => person.id !== id))
    })
  }}

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
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const oldPerson = persons.filter(person => person.name == newName)[0]
        const id = oldPerson.id
        const newPersonRecord = {
          ...oldPerson,
          number: event.target[1].value
        }
        personService.update(id, newPersonRecord)
        .then( updatedPerson => {
          setPersons(persons.map(person => person.id===id ? updatedPerson : person))
        })
        .catch(
          error => {
          setStyle(errorStyle)
          setMessage(`Information of ${newName} has already been removed from server`)
          setTimeout(()=>{
            setMessage('')
          }, 3000)
        })
      }
    } else {
      const personToAdd = {name: newName, number: newNum}
      // const newPersons = persons.concat(personToAdd)
      personService.create(personToAdd)
      .then(
        personToAdd => {
          setMessage(`Added ${personToAdd.name}`)
          setStyle(notificationStyle)
          setTimeout(()=>{
            setMessage('')
          }, 3000)
          setPersons(persons.concat(personToAdd))
        }
      )
      
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
      <Notification message={message} style={style} />
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
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App