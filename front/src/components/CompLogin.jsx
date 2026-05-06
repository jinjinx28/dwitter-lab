import React,{useRef, useState} from 'react';

export default function CompLogin() {
    const idRef = useRef(null);
    const pwRef = useRef(null);
    const initForm = {id : '', pw : ''};
    const [form, setForm] = useState(initForm);

    const handleFormChange = (e) => {
        const{id, value} = e.target;
        setForm({...form, [id]:value})
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(form.id === '') {
            alert('아이디를 입력해주세요.');
            idRef.current.focus();
        } else if (form.pw === '') {
            alert('비밀번호를 입력해주세요.');
            pwRef.current.focus();
        } else {
            const url = "http://localhost:9000/api/post";
            const response = await fetch (url, {
                method : "POST",
                headers : {'Content-type' : 'application/json'},
                body : JSON.stringify({"formData" : form})
            });
        }
    }

    return (
         <div style={{width:"10000px", margin:"auto"}}>
            <h1>Post :: 로그인 폼</h1>
            <form onSubmit={handleFormSubmit}>
                <ul>
                    <li>
                        <label htmlFor="id">ID</label>
                        <input type="text"
                                id='id'
                                name='id'
                                ref={idRef}
                                value={form.id}
                                onChange={handleFormChange} />
                    </li>
                    <li>
                        <label htmlFor="pw">PASSWORD</label>
                        <input type="password"
                                id='pw'
                                name='pw'
                                ref={pwRef}
                                value={form.pw}
                                onChange={handleFormChange} />
                    </li>
                    <li>
                        <button type='submit'>LogIn</button>
                        <button type='button' onClick={() => setForm(initForm)}>Retry</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}