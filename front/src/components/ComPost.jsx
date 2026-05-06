import React, { useState, useRef } from 'react';

export default function ComPost() {
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const [form, setForm] = useState({name:'', address:''})

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }
    console.log(form);
    
    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>Post :: 주소 등록 폼</h1>
            <form>
                <ul>
                    <li>
                        <label htmlFor="name">이름</label>
                        <input type="text" 
                                name="name" 
                                id="name"
                                ref={nameRef}
                                value={form.name}
                                onChange={handleFormChange}/>
                    </li>
                    <li>
                        <label htmlFor="address">주소</label>
                        <input type="text" 
                                name="address" 
                                id="address"
                                ref={addressRef}
                                value={form.address}
                                onChange={handleFormChange} />
                    </li>
                        <button type="button">등록하기</button>
                        <button type="button">다시쓰기</button>
                </ul>
            </form>
        </div>
    );
}