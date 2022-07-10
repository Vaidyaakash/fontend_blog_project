import React, { createContext, useState,useEffect } from 'react'

export const data = createContext()

const BlogApi = (props) => {
    const [response, setResponse] = useState([])

    useEffect(() => {
      const data = "https://blogapis1.herokuapp.com/main/blog"
      fetch(data).then(res => res.json()).then(result => setResponse(result))
    })

    return (
        <div>
                <data.Provider value={[response, setResponse]}>
                    {props.children}
                </data.Provider>
        </div>
    )
}

export default BlogApi;