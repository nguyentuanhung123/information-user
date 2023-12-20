import React, { useEffect } from "react";
import { useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import '../../css/AddEdit.css';
import '../../css/AddTags.css';

const initialUser = () => {
    console.log('initialUser');
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
            const hobbies = [...user.hobbies];
            if (hobbyText !== '' && hobbies.includes(hobbyText)) {
                const newHobbies = [...hobbies, hobbyText];
                setUser({
                    ...user,
                    hobbies: newHobbies
                })
            }
            else {
                console.log('empty');
            }
        }
    }

    //Đoạn này nữa ạ
    const handleDeleteHobby = (index) => {
        console.log('Index : ', index);
    }

    const haldeName = (name) => {
        alert(name);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = () => {
        console.log(user);
    }

    useEffect(() => {
        console.log('Re-render');
    }, [user])

    return (
        <div className="AddTagContainer">
            <div className="addTagBox">
                <h5>User</h5>
                <form onSubmit={handleSubmit}>
                    <lable htmlFor="name">Name</lable>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name ..."
                        value={user.name || ""}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <lable htmlFor="age">Age</lable>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        placeholder="Your Age ..."
                        value={user.age || ""}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <lable htmlFor="city">City</lable>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Your City ..."
                        value={user.address.city || ""}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <lable htmlFor="nation">Nation</lable>
                    <input
                        type="text"
                        id="nation"
                        name="nation"
                        placeholder="Your Nation ..."
                        value={user.address.nation || ""}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <lable htmlFor="hobbies">Hobbies</lable>
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