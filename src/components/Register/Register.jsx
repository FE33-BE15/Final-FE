import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/authSlice';


function Register() {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [email, setEmail] = useState('');
    const [height, setHeight] = useState('');
    const [pass, setPass] = useState('');
    const [age, setAge] = useState('');
    const [activity, setActivity] = useState('');
    const [gender, setGender] = useState('');

    const inputgender = (e) => {
        setGender(e.target.value);
        console.log(gender);
    }

    const inputName = (e) => {
        setName(e.target.value);
    };

    const inputWeight = (e) => {
        setWeight(e.target.value);
    };

    const inputEmail = (e) => {
        setEmail(e.target.value);
    };

    const inputHeight = (e) => {
        setHeight(e.target.value);
    };

    const inputPassword = (e) => {
        setPass(e.target.value)
    };

    const inputAge = (e) => {
        setAge(e.target.value)
    };

    const inputActivity = (e) => {
        setActivity(e.target.value)
    };

    const dispatch = useDispatch();
    const klikDaftar = () => {
        console.log(
            name,
            email,
            age,
            weight,
            height,
            activity,
            pass,
            gender
        );
        dispatch(signUpUser({name, email, age, weight, height, activity, pass, gender}));
    }

    return (
        <div className="container-2">
            <div className="title">Buat Akun</div>
            <div className="register-content">
                <form>
                    <div className="user-details">
                        
                        <div className="input-box">
                            <span className="details">Nama</span>
                            <input
                                value={name}
                                onChange={inputName} 
                                type="text" 
                                placeholder='Masukan Nama' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Email</span>
                            <input
                                value={email}
                                onChange={inputEmail} 
                                type="email" 
                                placeholder='Masukan Email' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Umur</span>
                            <input
                                value={age}
                                onChange={inputAge}
                                type="text" 
                                placeholder='Masukan Umur' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Berat Badan</span>
                            <input
                                value={weight}
                                onChange={inputWeight} 
                                type="text" 
                                placeholder='Masukan Berat Badan' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Tinggi Badan</span>
                            <input
                                value={height}
                                onChange={inputHeight}
                                type="text" 
                                placeholder='Masukan Tinggi Badan' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Aktivitas</span>
                            <input
                                value={activity}
                                onChange={inputActivity} 
                                type="text" 
                                placeholder='Masukan Masukan Aktivitas' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Password</span>
                            <input
                                value={pass}
                                onChange={inputPassword} 
                                type="password" 
                                placeholder='Masukan Password' 
                                required
                            />
                        </div>

                    </div>
                    <div className="gender-details" onChange={inputgender}>
                        <input type='radio' name='gender' id='dot-1' value="Laki-laki"></input>
                        <input type='radio' name='gender' id='dot-2' value="Perempuan"></input>
                        <input type='radio' name='gender' id='dot-3' value="Lainnya"></input>
                        <span className="gender-title">Jenis Kelamin</span>
                        <div className="category">
                            <label htmlFor='dot-1'>
                                <span  className="dot one"></span>
                                <span className="gender">Laki-laki</span>
                            </label>
                            <label htmlFor='dot-2'>
                                <span className="dot two"></span>
                                <span className="gender">Perempuan</span>
                            </label>
                            <label htmlFor='dot-3'>
                                <span className="dot three"></span>
                                <span className="gender">Lainnya</span>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <input type='submit' value='Register' onClick={klikDaftar}></input>
                    </div>

                    <h5>Sudah Punya Akun ?  <Link to='/'>Masuk</Link></h5>
                </form>
            </div>
        </div>
    )
}

export default Register;