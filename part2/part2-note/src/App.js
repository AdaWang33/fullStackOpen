import { useState, useEffect } from 'react'
import axios from 'axios'
import noteService from './services/notes'
import Note from './components/Note'
import Notification from './components/Notification'

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => setNotes(initialNotes))
      // .then(response => {
      //   console.log('promise fulfilled')
      //   setNotes(response.data)
      // })
  }, [])
  
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  const addNote = (event) => {
    // event is the event that triggers to call to event handler function
    // event target in this case is the form
    event.preventDefault() // default action would cause the page to reload
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    noteService.create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    // no need to prevent default as there is no default action for input change
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const note = notes.find(n => n.id === id)
    const toggledNote = {...note, important: !note.important}

    noteService.update(id, toggledNote)
    .then(returnedNote => {
      setNotes(notes.map(n => n.id === id ? returnedNote : n))
    })
    .catch(error => {
      // alert(`the note ${note.content} doesn't exist on server!`)
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter( n => n.id!== id)) 
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={()=>toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer/>   
    </div>
  )
}

export default App