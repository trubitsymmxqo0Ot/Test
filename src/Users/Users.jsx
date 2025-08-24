import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]); 
    const loadFunction = async() => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const answer = response.data;
            setUsers(answer);
        } catch(e) {
            console.error(e);
        }
    }
    useEffect(() => {
        loadFunction();
    }, [])
    return (
        <div data-testid='users-page'>
        {users.map(item => 
            <Link 
                to={`/users/${item.id}`} 
                key={item.id} 
                data-testid="user-item">
                {item.title}
            </Link>
        )}
        </div>
    )
}