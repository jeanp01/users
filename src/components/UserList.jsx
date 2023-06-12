import User from "./User"

const UserList = ({users, deleteUser, changeShowModal, setIsUserToUpdate}) =>{
    return(
        <section className="  grid sm:grid-cols-3 md-grid-cols-4 gap-6 p-6   ">

            {
                users.map((user) =>
                <User
                key={user.id} 
                user={user} 
                deleteUser={deleteUser} 
                changeShowModal={changeShowModal}
                setIsUserToUpdate={setIsUserToUpdate}  />)
            }

        </section>
    )
}

export default UserList