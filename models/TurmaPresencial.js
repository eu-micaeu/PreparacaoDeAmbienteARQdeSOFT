const Turma = require('./Turma');

class TurmaPresencial extends Turma {

    constructor(codigo, nota, frequencia) {

        super(codigo, nota);

        this.frequencia = frequencia;

    }

    aprovado() {

        return this.nota >= 6 && this.frequencia >= 75;
        
    }
}

module.exports = TurmaPresencial;
