import React, { useEffect } from "react";
import { useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import '../../css/AddEdit.css';
import '../../css/AddTags.css';

const initialUser = () => {
    //console.log('initialUser');
    return {
        name: 'Hưng',
        age: 18,

        address: {
            city: 'Hà Nội',
            nation: 'Việt Nam'
        },
        hobbies: ['playing badminton', 'swimming', 'reading books']
    }
}



const User = () => {
    const [user, setUser] = useState(initialUser);
    const [hobbyText, setHobbyText] = useState('');
    const [reRender, setReRender] = useState(false);

    const forceRender = () => {
        setReRender(!reRender);
    }


    //Đoạn này ạ
    const hanldeAddHobby = (e) => {
        if (e.key === 'Enter') {
            if (hobbyText !== '') {
                let copyUser = { ...user };
                if (!copyUser.hobbies.includes(hobbyText)) {
                    copyUser.hobbies.push(hobbyText);
                } else {
                    copyUser.hobbies = copyUser.hobbies.filter((hobby) => hobby !== hobbyText)
                }
                setUser(copyUser);
            }
        }
    }

    //Đoạn này nữa ạ
    const handleDeleteHobby = (index) => {
        console.log('Index : ', index);
    }

    const handleInputChangeCity = (e) => {
        setUser((prevUser) => {
            const newAddress = { ...prevUser.address };
            newAddress.city = e.target.value;
            return {
                ...prevUser,
                address: newAddress
            }
        })
    }

    const handleInputChangeNation = (e) => {
        setUser((prevUser) => {
            const newAddress = { ...prevUser.address };
            newAddress.nation = e.target.value;
            return {
                ...prevUser,
                address: newAddress
            }
        })
    }

    const haldeName = (name) => {
        alert(name);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => {
            return { ...prevUser, [name]: value }
        })
    }

    const handleSubmit = () => {
        console.log(user);
    }

    // useEffect(() => {
    //     console.log('Re-render');
    // }, [user])

    return (
        <div className="AddTagContainer">
            <div className="addTagBox">
                <h5>User</h5>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name ..."
                        value={user.name || ""}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        placeholder="Your Age ..."
                        value={user.age || ""}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Your City ..."
                        value={user.address.city || ""}
                        onChange={(e) => handleInputChangeCity(e)}
                    />
                    <label htmlFor="nation">Nation</label>
                    <input
                        type="text"
                        id="nation"
                        name="nation"
                        placeholder="Your Nation ..."
                        value={user.address.nation || ""}
                        onChange={(e) => handleInputChangeNation(e)}
                    />
                    <label htmlFor="hobbies">Hobbies</label>
                    <div className="addTagInput">
                        {
                            user.hobbies.map((tag, index) => {
                                return (
                                    <div className="tags" key={index} >
                                        <span onClick={() => haldeName(tag)}>{tag}</span>
                                        <div className="crossIcon" onClick={() => handleDeleteHobby(index)}>
                                            <RxCross2 />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <input className="inputTag" type="text" autoFocus
                            value={hobbyText}
                            onKeyUpCapture={(e) => { hanldeAddHobby(e) }}
                            onChange={(e) => setHobbyText(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Save"></input>
                </form>
            </div>
        </div>
    )
}
export default User;