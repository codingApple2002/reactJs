import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState({})
    useEffect(()=> {
        fetch('https://api.github.com/users/codingApple2002')
        .then(Response => Response.json())
        .then(Data => {
            console.log(Data);
            setData(Data)
        })
    },[])
  return (
    <div className='bg-gray-500 text-center m-4 text-white'>github followers: {data.followers}
    <img src={data.avatar_url} alt="github-img" width={300}/></div>
  )
}

export default Github
