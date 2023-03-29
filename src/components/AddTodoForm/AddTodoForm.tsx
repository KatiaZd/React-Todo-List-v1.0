import React, { useState } from "react";
// import { AddTodo } from "../../types";

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    //Maintenir le state du formulaire. Définir les types de state et la fonction qui va mettre à jour le state (setText)
    const [text, setText] = useState('');

    return (
      <form>
        <input
        // Lier text à la valeur input pour que le formulaire soit contrôlé
          type="text"
          value={text}
        // Définir le texte à l'aide se setText du onVChange gestionnaire d'entrée. e.target.value contient l'entrée utilisateur
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText('');
          }}
        >
          Ajouter
        </button>
      </form>
    );
  };