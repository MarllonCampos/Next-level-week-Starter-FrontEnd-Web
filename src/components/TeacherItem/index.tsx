import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
  
}

interface TeacherItemProps {
  classes: Teacher;
}
export const TeacherItem: React.FC<TeacherItemProps> = ({ classes }) => {
  return (
    <article className="teacher-item">
      <header> 
        <img src={classes.avatar} alt={classes.name} />
        <div>
          <strong>{classes.name}</strong>
          <span>{classes.subject}</span>
        </div>
      </header>

      <p>{classes.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {classes.cost},00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

