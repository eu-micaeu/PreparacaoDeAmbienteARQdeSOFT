package main

import(

	"fmt"
	"github.com/eu-micaeu/PreparacaoDeAmbienteARQdeSOFT/handlers"

)

func main() {

	// Aluno:

	fmt.Println("Aluno: ")
	
	aluno := handlers.Aluno("Micael", 123456, 20)

	fmt.Println(aluno["nome"], aluno["matricula"], aluno["idade"])

	// Turma:

	turma := handlers.Turma("EC47A", 8.5)

	fmt.Println(turma["codigo"], turma["aprovado"].(func() bool)())

	// Turma Presencial:

	turmaPresencial := handlers.TurmaPresencial(0.8)

	fmt.Println(turmaPresencial["frequencia"], turmaPresencial["aprovado"].(func() bool)())

}