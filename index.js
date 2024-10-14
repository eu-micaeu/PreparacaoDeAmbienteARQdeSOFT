const Aluno = require('./models/Aluno');
const Turma = require('./models/Turma');
const TurmaPresencial = require('./models/TurmaPresencial');

// Aluno
const aluno = new Aluno('João Silva', 'joao123', '123456'); // Criando um novo aluno
console.log('Informações do Aluno:');
console.log(`Nome: ${aluno.nome}`);
console.log(`Login: ${aluno.login}`);
console.log(`RA: ${aluno.RA}`);
console.log('----------------------------');

// Turma
const turma = new Turma('T001', 8); // Criando uma nova turma
console.log('Informações da Turma:');
console.log(`Código da Turma: ${turma.codigo}`);
console.log(`Nota do Aluno: ${turma.nota}`);
console.log(`Aluno aprovado na Turma? ${turma.aprovado()}`);
console.log('----------------------------');

// Turma Presencial
const turmaPresencial = new TurmaPresencial('T002', 7, 72); // Criando uma nova turma presencial
console.log('Informações da Turma Presencial:');
console.log(`Código da Turma: ${turmaPresencial.codigo}`);
console.log(`Nota do Aluno: ${turmaPresencial.nota}`);
console.log(`Frequência do Aluno: ${turmaPresencial.frequencia}%`);
console.log(`Aluno aprovado na Turma Presencial? ${turmaPresencial.aprovado()}`);
console.log('----------------------------');

