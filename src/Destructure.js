import React,{useEffect,useState} from 'react'

export default function Destructure() {
    // let user ={
    //     username :"dileep",
    //     age :25,
    //     getName (){
    //         return "gurram";
    //     }
    // };
    // let {username,age,getName} = user;
    // console.log(username);
    // console.log(age);
    // console.log(getName());
    // let user =[
    //     "dileep",
    //      25,
    //    function getName (){
    //         return "gurram";
    //     }
    // ];
    // let [username,age,getName]= user;
    // console.log(username);
    // console.log(age);
    // console.log(getName());
    const [data,setData] = useState([]);
    useEffect(
        () =>{
            fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((data) =>{setData(data);
        });
        },[]
    );
    return (
        <div>
            <table border={1}>
                <thead>
                 <tr>
                    <th>id</th>
                    <th>userid</th>
                    <th>body</th>
                    <th>title</th>
                </tr> 
                </thead>
                <tbody>{data.map((posts) =>
                <tr>
                        <td>{posts.userId}</td>
                        <td>{posts.id}</td>
                        <td>{posts.title}</td>
                        <td>{posts.body}</td>
                 </tr>
                )}</tbody>
            </table>
            
        </div>
    )
}
