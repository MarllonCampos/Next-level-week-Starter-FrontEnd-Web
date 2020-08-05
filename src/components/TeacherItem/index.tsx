import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem(){
    return(
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars0.githubusercontent.com/u/52542050?s=460&u=89863cb30413d677d5d075802ead3e4871901c28&v=4://github.com/account"
              alt="MarllonCampos"
            />
            <div>
              <strong>Marllon campos</strong>
              <span>Quimica</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /> <br /> Apaixonado por explodir coisas em laboratório e por
            mudar a vida das pessoas através de experiências. Mais de 200.000
            pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 35,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
    )
}




export default TeacherItem;