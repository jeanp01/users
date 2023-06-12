import { useEffect } from "react"
import { useForm } from "react-hook-form"

const ModalForm = ({
    isShowModal,  
    createUser, 
    isUserToUpdate,
    updateUser,
    resetModalForm}) => {

    const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        if(!data.birthday) data.birthday = null;
        if(isUserToUpdate){
            updateUser(data, reset)
        }else{
            createUser(data, reset); 
        }
    }

    const handleCloseModal = () => {
        resetModalForm(reset)
    }   

    useEffect(() => {
        if(isUserToUpdate){
            reset(isUserToUpdate)
        }
    },[isUserToUpdate])

    return(
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${
            isShowModal ? "opacity-100 visible" : "invisible opacity-0"
        }transition-opacity`}>
            
            <form onSubmit={handleSubmit(submit)} className="bg-white w-[280px] p-1 grid gap-1 relative align-center">
                <h3 className="font-bold text-2xl">{isUserToUpdate? "Editar usuario" : "Nuevo usuario"}</h3>

                 {/* NOMBRE */}
                <div className="grid gap-1">
                    <label htmlFor="font-bold text-sm">Nombre</label>
                    <input placeholder="Ingresa tu nombre..." className="bg-gray-100 outline-none p-1" type="text"
                    {...register("first_name")}/>
                </div>
                
                 {/* APELLIDO */}
                <div className="grid gap-1">
                    <label htmlFor="font-bold text-sm">Apellidos</label>
                    <input placeholder="Ingresa tu apellido..." className="bg-gray-100 outline-none p-1" type="text" 
                    {...register("last_name")}/>
                </div>

                 {/* CORREO */}
                <div className="grid gap-1">
                    <label htmlFor="font-bold text-sm">Correo</label>
                    <input placeholder="Ingresa tu correo..." className="bg-gray-100 outline-none p-1" type="email"
                    {...register("email")} />
                </div>

                 {/* CONTRASEÑA */}
                <div className="grid gap-1">
                    <label htmlFor="font-bold text-sm">Contraseña</label>
                    <input placeholder="Ingresa tu contraseña..." className="bg-gray-100 outline-none p-1" type="password"
                    {...register("password")} />
                </div>

                 {/* CUMPLEAÑOS */}
                <div className="grid gap-1">
                    <label htmlFor="font-bold text-sm">Cumpleaños</label>
                    <input placeholder="Ingresa tu cumpleaños..." className="bg-gray-100 outline-none p-1" type="date"
                    {...register("birthday")} />
                </div>
                <button onClick={handleCloseModal} type="button" className="absolute top-2 right-2 text-2xl hover:text-secondary" ><i className='bx bxs-user-x'></i></button>


                <button className="btn-primary">{isUserToUpdate? "Guardar cambios" : "Agregar nuevo usuario"}</button>
            </form>
        </section>
    )
}

export default ModalForm