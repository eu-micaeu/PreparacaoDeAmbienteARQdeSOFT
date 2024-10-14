package handlers

import ()

func Turma(codigo string, nota float64) map[string]interface{} {
	return map[string]interface{}{
		"codigo": codigo,
		"nota":   nota,
		// Função anônima:
		"aprovado": func() bool {

			if nota >= 7 {

				return true

			} else {

				return false

			}

		},
	}
}
