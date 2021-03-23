import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props

  return (
    <div>
      <form onSubmit={submit}>
        <label>Username
        <input 
          onChange={update}
          placeholder='Username'
          name='username'
          value={values.username}
          type='text'
        />
        </label>
        <label>Email
        <input 
          onChange={update}
          placeholder='Email'
          name='email'
          type='text'
        />
        </label>
        <label>Role
        <input 
          onChange={update}
          placeholder='Role'
          name='role'
          type='text'
        />
        </label>
        <input
          type='submit'
          value='Submit'
        />
      </form>
      {
        values.map((member, idx)  => {
          return (
            <div key={idx}>
              Username:{member.username} Email: {member.email} Role: {member.role}
            </div>
          )
        })
      }
    </div>
  )

}