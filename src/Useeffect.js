import React,{useEffect,useState} from 'react'

export default function Useeffect() {
    const [data, setData] = useState([]);

   useEffect (() =>{
       fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((data) =>{
           setData(data);
       });
   },[]
   );
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>USERID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>BODY</th>
                    </tr>
                </thead>
                <tbody>{data.map((posts) =>
                <tr>
                    <td>{posts.userId}</td>
                    <td>{posts.id}</td>
                    <td>{posts.title}</td>
                    <td>{posts.body}</td>
                </tr>
                )}

                </tbody>
            </table>
            
        </div>
    )
}
