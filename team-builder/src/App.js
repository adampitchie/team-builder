import React, { useState } from 'react'
import './App.css';
import Form from './Form'

const teamList = [
  { username: 'john', email: 'john@abc.com', role: 'backend engineer' },
  { username: 'sally', email: 'sally@abc.com', role: 'frontend engineer' }
]

const initialFormValues = { username: '', email: '', role: '' }

function App() {

  const [members, setMembers] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]: value})
  }

  const submitForm = evt => {
    evt.preventDefault();
    setMembers([...members, formValues])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form 
        values={members}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
