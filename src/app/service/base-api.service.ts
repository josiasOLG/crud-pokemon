import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceInterface } from './interface/api.interface';
import { throwError } from 'rxjs';

/**
 * @description
 * Classe base para serviços API. Esta classe implementa uma interface de serviço API
 * genérica e fornece uma implementação base para operações CRUD comuns.
 */
@Injectable({
  providedIn: 'root',
})
export abstract class BaseApiService<T> implements ApiServiceInterface<T> {
  /**
   * @description
   * A URL base completa para o serviço API, composta pela URL base do ambiente e um complemento específico de serviço.
   */
  private baseUrl: string;

  /**
   * @description
   * Construtor que inicializa o HttpClient e compõe a URL base para o serviço API.
   *
   * @param http A instância do HttpClient injetada.
   */
  constructor(protected http: HttpClient) {
    this.baseUrl = `${environment.BASE_URL}/${this.getUrlComplemento()}`;
  }

  /**
   * @description
   * Método abstrato para obter o complemento de URL específico do serviço.
   * Este método deve ser implementado por cada serviço que estende BaseApiService.
   *
   * @returns O complemento de URL específico do serviço.
   */
  abstract getUrlComplemento(): string;

  protected setBaseUrl(newUrl: string): void {
    this.baseUrl = newUrl;
  }

  /**
   * @description
   * Método para tratar erros HTTP.
   * @param error O objeto de erro.
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Erro ${error.status}: ${error.message}`;
    }
    console.error(errorMessage); // Log do erro.
    return throwError(errorMessage); // Retorna um observable com uma mensagem de erro amigável.
  }

  /**
   * @description
   * Busca uma lista de itens.
   * @param params Parâmetros opcionais para filtrar, ordenar ou paginar itens.
   */
  async get(params?: any): Promise<T[]> {
    const httpParams = new HttpParams({ fromObject: params });
    try {
      const response = (await this.http
        .get<T[]>(this.baseUrl, { params: httpParams })
        .toPromise()) as T[];
      return response;
    } catch (error: any) {
      return Promise.reject(this.handleError(error));
    }
  }

  /**
   * @description
   * Busca um único item por seu ID.
   * @param id O ID do item a ser buscado.
   */
  async getById(id: string | number): Promise<T> {
    try {
      const response = (await this.http
        .get<T>(`${this.baseUrl}/${id}`)
        .toPromise()) as T;
      return response;
    } catch (error: any) {
      return Promise.reject(this.handleError(error));
    }
  }

  /**
   * @description
   * Cria um novo item.
   * @param item O item a ser criado.
   */
  async post(item: T): Promise<T> {
    try {
      const response = (await this.http
        .post<T>(this.baseUrl, item)
        .toPromise()) as T;
      return response;
    } catch (error: any) {
      return Promise.reject(this.handleError(error));
    }
  }

  /**
   * @description
   * Atualiza um item existente.
   * @param id O ID do item a ser atualizado.
   * @param item O item atualizado.
   */
  async put(id: string | number, item: T): Promise<T> {
    try {
      const response = (await this.http
        .put<T>(`${this.baseUrl}/${id}`, item)
        .toPromise()) as T;
      return response;
    } catch (error: any) {
      return Promise.reject(this.handleError(error));
    }
  }

  /**
   * @description
   * Atualiza parcialmente um item existente.
   * @param id O ID do item a ser atualizado.
   * @param item O item atualizado.
   */
  async patch(id: string | number, item: Partial<T>): Promise<T> {
    try {
      const response = (await this.http
        .patch<T>(`${this.baseUrl}/${id}`, item)
        .toPromise()) as T;
      return response;
    } catch (error: any) {
      return Promise.reject(this.handleError(error));
    }
  }

  /**
   * Exclui um item existente.
   * @param id O ID do item a ser excluído.
   */
  async delete(id: string | number): Promise<void> {
    try {
      await this.http.delete<void>(`${this.baseUrl}/${id}`).toPromise();
    } catch (error: any) {
      return Promise.reject(this.handleError(error));
    }
  }
}
