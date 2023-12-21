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
        hobbies: ['playing badminton', 'swimming', 'reading books', 'go fishing', 'playing soccer']
    }
}



const User = () => {
    const [user, setUser] = useState(initialUser);
    const [newHobby, setNewHobby] = useState('');
    const [reRender, setReRender] = useState(false);

    const forceRender = () => {
        setReRender(!reRender);
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

    //Đã chữa đc đoạn này
    const handleKeyUp = (e) => {
        console.log('Key pressed:', e.key);
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            console.log('Adding hobby:', newHobby);
            if (newHobby.trim() !== '') {
                setUser((prevUser) => ({
                    ...prevUser,
                    hobbies: [...prevUser.hobbies, newHobby.trim()],
                }));
                setNewHobby('');
            }
        }
    };

    //Đã chữa đc đoạn này
    const handleDeleteHobby = (index) => {
        setUser((prevUser) => {
            const newHobbies = [...prevUser.hobbies];
            newHobbies.splice(index, 1);
            return {
                ...prevUser,
                hobbies: newHobbies,
            };
        });
    };

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
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
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
                            value={newHobby}
                            onKeyUp={handleKeyUp}
                            onChange={(e) => setNewHobby(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Save"></input>
                </form>
            </div>
        </div>
    )
}
export default User;
