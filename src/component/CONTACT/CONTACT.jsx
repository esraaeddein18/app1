import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('send Message')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, userAge, userEmail ,userPassword } = e.target.elements
    let conFom = {
      name: name.value,
      userAge: userAge.value,
      userEmail: userEmail.value,
      userPassword: userPassword.value,
    }
    console.log(conFom)
  }
  return (
    <div className={style.container}>
      <h2 className={style.contact}>CONATCT SECTION</h2>
      <div className="brd"></div>
      <div class={style.flex}>
                <div class ={style.brd}></div>
                <i class="fa-solid fa-star"></i>
                <div class ={style.brd}></div>
      </div>
      <form onSubmit={style.con} >
          <label className="form-label" htmlFor="name" placeholder='userName :'>
          userName:</label>
          <input type="text" onkeydown="myFunction()"></input>


          <label className="form-label" htmlFor="userAge :">
          userAge :</label>
          <input type="age" onkeyDown="myFunction()"></input>


          <label className="form-label" htmlFor="userEmail :">
          userEmail :</label>
          <input type="email" onkeyDown="myFunction()"></input>


          <label className="form-label" htmlFor="userPassword :">
          userPassword :</label>
          <input type="password" onKeyDown="myFunction()"></input>

        <button className={style.btn} type="send Messaga">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact
