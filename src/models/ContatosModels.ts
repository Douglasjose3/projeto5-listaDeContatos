class ContatosModels {
  titulo: string;
  email: string;
  telefone?: number;
  id: number;

  constructor(titulo: string, email: string, telefone: number, id: number) {
    this.titulo = titulo;
    this.email = email;
    this.telefone = telefone;
    this.id = id;
  }
}

export default ContatosModels;
