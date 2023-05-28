import {useEffect, useState} from "react";
import {save} from "./redux/actions";
import {useDispatch, useSelector} from "react-redux";

export default function Form() {
    const [name, setUserName] = useState('')
    const [surname, setUserSurname] = useState('')
    const [phone, setUserPhone] = useState('')
    const userEdit = useSelector((state) => state.userEdit)
    const dispatch = useDispatch()

    useEffect(() => {
        setUserName(userEdit.name)
    }, [userEdit.name])

    useEffect(() => {
        setUserSurname(userEdit.surname)
    }, [userEdit.surname])

    useEffect(() => {
        setUserPhone(userEdit.phone)
    }, [userEdit.phone])


    function onSurnameInputChange(e) {
        setUserSurname(e.target.value)
    }

    function onNameInputChange(e) {
        setUserName(e.target.value)
    }

    function onPhoneInputChange(e) {
        setUserPhone(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()

        const user = {
            ...userEdit,
            "name": name,
            "surname": surname,
            "phone": phone,
        }

        if (
            (user.name === '' || user.name === undefined) ||
            (user.surname === '' || user.surname === undefined) ||
            (user.phone === '' || user.phone === undefined)
        ) {
            alert('Invalid data!')
        } else {
            dispatch(save(user))
            setUserName('')
            setUserSurname('')
            setUserPhone('')
        }
    }



    return(
        <form
            id="userForm"
            onSubmit={onSubmit}
        >
            <input
                id="name"
                type="text"
                placeholder="Your name"
                onChange={onNameInputChange}
                value={name}
            />
            <input
                id="surname"
                type="text"
                placeholder="Your surname"
                onChange={onSurnameInputChange}
                value={surname}
            />
            <input
                id="phone"
                type="number"
                placeholder="Phone number"
                onChange={onPhoneInputChange}
                value={phone}
            />
            <button id="buttonSave">Save</button>
        </form>
    )
}