const User = ({user, deleteUser, changeShowModal,setIsUserToUpdate}) =>{


    const handleClickDelete = () => {
        deleteUser(user.id)
    }

    const handleClickUpdate=  () =>{
        changeShowModal()
        setIsUserToUpdate(user)

    }

    return(
        
        <div className=" p-4 border border-9  flex-col  h-auto ">

            <h4 className=" text-center text-2xl capitalize font-bold">{user.first_name} {user.last_name}</h4>

            <div className="p-2">
                <h5 className="text-gray-600 uppercase text-xs text-[11px]  ">Correo</h5>
                <span className="text-xs text-[10px]">{user.email}</span>
            </div>

            <div className="p-1">
                <h5 className="text-gray-600 uppercase text-xs text-[11px]">Cumpleaños</h5>
            <span className="text-xs text-[10px]"><i className='bx bx-gift'></i>{user.birthday || "No encontrado"}</span>
            </div>
            <div className="p-2 flex justify-end">
            <button className=" rounded-sm p-1 mr-2 border border-9 border-red-900 bg-red-500 text-white" onClick={handleClickDelete}><i className='bx bxs-trash'></i></button>
            <button className="rounded-sm p-1 mr-2 border border-9 border-gray-400  text-gray-500 bg-gray-300" onClick={handleClickUpdate}><i className='bx bx-pencil '></i></button>
            </div>

        </div>
    )
}

export default User