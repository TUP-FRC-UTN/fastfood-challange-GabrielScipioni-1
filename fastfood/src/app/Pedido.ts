export class Pedido {
  constructor(
    public numero: number,
    public nombre: string,
    public description: string,
    public date: Date,
    public status: 'pending' | 'in-progress' | 'ready' | 'delivered'
  ) {}
}
