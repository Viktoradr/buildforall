class UsuarioViewModel {
    constructor() {
        this.Medidas = [];
        this.Perfil = new PerfilViewModel();
        this.Objetivo = new TipoObjetivoViewModel();
        this.Atividade = new TipoAtividadeViewModel();
        this.Professor = new ProfessorViewModel();
    }
}

class FriendViewModel { constructor() {} }
class MedidaViewModel { constructor() {} }
class PerfilViewModel { constructor() {} }
class ProfessorViewModel { constructor() {} }

class GrupoFichaViewModel {
    constructor() {
        this.ListaFicha = [];
        this.Usuario = new UsuarioViewModel();
        this.TipoGrupoFicha = new TipoGrupoFichaViewModel();
    }
}

class FichaViewModel {
    constructor() {
        this.ListaFichaExercicio = [];
    }
}

class FichaExercicioViewModel {
    constructor() {
        this.Exercicio = new ExercicioViewModel();
    }
}

class ExercicioViewModel { constructor() {} }
class TipoObservacaoViewModel { constructor() {} }
class TipoGrupoFichaViewModel { constructor() {} }
class TipoFichaViewModel { constructor() {} }
class TipoAtividadeViewModel { constructor() {} }
class TipoObjetivoViewModel { constructor() {} }
class TipoPlanoViewModel { constructor() {} }