/* import React from 'react'
import { useEffect, useState } from 'react'

function FetchData() {
    const [record, setRecords] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])

  return (
      <div>
          <ul>
              {record.map((list, index) => (<li key={index}>{list.id} | {list.name} </li>))}
          </ul> 
    </div>
  )
}

export default FetchData */