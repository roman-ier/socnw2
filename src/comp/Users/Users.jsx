import React from "react";
import User from "./User";

let Users = ({users, ...props}) => {
    return <div style={{margin: '10px'}}>
        {users.map(u =>
            <User key={u.id} user={u} {...props}/>
        )}
    </div>
}
export default Users;