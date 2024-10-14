package handlers

import ()

func TurmaPresencial(frequencia float64) map[string]interface{} {

    turmaInfo := Turma("EC47A", 8.5)

    return map[string]interface{}{
        "frequencia": frequencia,
        "aprovado": func() bool {

			if turmaInfo["aprovado"].(func() bool)() && frequencia >= 0.75 {

				return true

			} else {

				return false

			}

        },
    }
}
