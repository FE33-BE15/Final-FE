import { useState } from 'react';
import bg from '../Login/BG.png'
import { Link } from 'react-router-dom';
import '../Login/Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }

    const inputPassword = (e) => {
        setPass(e.target.value);
    }

    const login = (e) => {
        e.preventDefault();

        console.log('Masukan Email :', email)
        console.log('Masukan Password :', pass)
    };

    return (
        <div className="container-1">
            <div className="img">
                <img src={bg} name='BG' alt="BG" />
            </div>

            <div className="login-content">
                <form action='#' onSubmit={login}>
                    <div className="title-container">
                        <h2>Masuk</h2>
                        <p>Selamat Datang Di Baries</p>
                    </div>

                    <div className="login-inner-content">
                        <div className="input-div one">
                            <div className="i">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="div">
                                <input
                                    value={email}
                                    onChange={inputEmail}
                                    type="email" 
                                    className="input" 
                                    placeholder='Email'
                                />
                            </div>
                        </div>

                        <div className="input-div pass">
                            <div className="i">
                                <i className="fa fa-lock"></i>
                            </div>
                            <div className="div">
                                <input
                                    value={pass}
                                    onChange={inputPassword}
                                    id="pswrd" 
                                    type="password" 
                                    className="input" 
                                    placeholder='Input Password'
                                />
                            </div>
                        </div>

                        <a href='#'>Lupa Password ?</a>
                    </div>

                    <input type='submit' className='btn' value='Login' />

                    <h4>Belum Punya Akun ? <Link to='/Register'>Daftar</Link></h4>
                </form>
            </div>
        </div>
    )
}

export default Login;