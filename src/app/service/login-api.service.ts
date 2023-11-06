import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeckDto } from './dto/deck.dto';
import { BaseApiService } from './base-api.service';
import { environment } from 'src/environments/environment';
import { LoginDto } from './dto/login.dto';

/**
 * @description
 * Serviço para interagir com a API de Pokémon. Este serviço estende
 * BaseApiService e implementa a interface ApiServiceInterface.
 *
 * @see BaseApiService
 * @see ApiServiceInterface
 */
@Injectable({
  providedIn: 'root',
})
export class LoginApiService extends BaseApiService<LoginDto> {
  /**
   * @description
   * Construtor que inicializa o HttpClient.
   *
   * @param http A instância do HttpClient injetada.
   */
  constructor(protected http: HttpClient) {
    super(http);
  }

   /**
   * @description
   * Método para obter o complemento de URL específico do serviço Pokémon.
   *
   * @returns O complemento de URL específico do serviço.
   */
   getUrlComplemento(): string {
    return 'login';
  }

  async loginService(loginData: LoginDto): Promise<LoginDto> {
    this.setBaseUrl(`${environment.BASE_URL_LOCAL}login`);  // Ajuste conforme necessário
    try {
      const existingLogins: any[] = await this.get({ login: loginData.login });
      if (existingLogins && existingLogins.length > 0) {
        const existingLogin = existingLogins[0];
        return await this.put(existingLogin.id, loginData);
      } else {
        return await this.post(loginData);
      }
    } catch (error: any) {
      return Promise.reject(this.handleError(error));
    }
  }
}
