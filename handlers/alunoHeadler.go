package handlers

import (

)

func Aluno(nome string, matricula int, idade int) map[string]interface{} {
    return map[string]interface{}{
        "nome":      nome,
        "matricula": matricula,
        "idade":     idade,
    }
}



