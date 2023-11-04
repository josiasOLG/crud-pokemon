/**
 * @description
 * Interface para os serviços API. Esta interface define os métodos CRUD que
 * devem ser implementados por cada serviço API.
 */
export interface ApiServiceInterface<T> {
  /**
   * @description
   * Busca uma lista de itens.
   *
   * @param params Parâmetros opcionais para filtrar, ordenar ou paginar itens.
   * @returns Uma promessa que resolve para uma lista de itens.
   */
  get(params?: any): Promise<T[]>;

  /**
   * @description
   * Busca um único item por seu ID.
   *
   * @param id O ID do item a ser buscado.
   * @returns Uma promessa que resolve para o item buscado.
   */
  getById(id: string | number): Promise<T>;

  /**
   * @description
   * Cria um novo item.
   *
   * @param item O item a ser criado.
   * @returns Uma promessa que resolve para o item criado.
   */
  post(item: T): Promise<T>;

  /**
   * @description
   * Atualiza um item existente.
   *
   * @param id O ID do item a ser atualizado.
   * @param item O item atualizado.
   * @returns Uma promessa que resolve para o item atualizado.
   */
  put(id: string | number, item: T): Promise<T>;

  /**
   * @description
   * Atualiza parcialmente um item existente.
   *
   * @param id O ID do item a ser atualizado.
   * @param item O item atualizado.
   * @returns Uma promessa que resolve para o item atualizado.
   */
  patch(id: string | number, item: Partial<T>): Promise<T>;

  /**
   * @description
   * Exclui um item existente.
   *
   * @param id O ID do item a ser excluído.
   * @returns Uma promessa que resolve para void.
   */
  delete(id: string | number): Promise<void>;
}
