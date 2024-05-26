import { BaseOptions } from "./types";

/**
 * Base class for the AzuraCast API.
 */
export class Base {
  /**
   * API URL for the AzuraCast instance.
   * @description The URL should be the full URL to the AzuraCast instance, including the protocol (http/https) and port if necessary.
   * @example https://demo.azuracast.com/api
   * @type {string}
   */
  protected _apiUrl: string;

  /**
   * API Key for the AzuraCast instance.
   * @description The API key should be a valid AzuraCast API key that has the necessary permissions to access the API endpoints.
   * @type {string}
   */
  protected _apiKey: string;

  constructor(options: BaseOptions) {
    this._apiUrl = options.apiUrl;
    this._apiKey = options.apiKey;
  }

  /**
   * Invoke the API request.
   * @description This method is used to invoke the API request. It should only be called by the child classes.
   */
  protected _invoke<T>(
    endpoint: string,
    method: string,
    body?: unknown
  ): Promise<T> {
    return fetch(`${this._apiUrl}/api${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": this._apiKey,
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText}: ${response.url}`);
      }
      return response.json();
    });
  }
}
