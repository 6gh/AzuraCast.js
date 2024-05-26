import { Base } from "../../base";
import { CustomField, CustomFieldReturn } from "./types";

export class CustomFields extends Base {
  /**
   * Get all custom fields
   * @description Returns a full list of all custom fields.
   */
  public getAll(): Promise<CustomFieldReturn[]> {
    return this._invoke<CustomFieldReturn[]>("/admin/custom_fields", "get");
  }

  /**
   * Get a custom field by ID
   * @description Returns a full summary of the specified custom field.
   * @param customFieldId The ID of the custom field to retrieve. Can be either a number or a string.
   */
  public async get(customFieldId: string | number): Promise<CustomFieldReturn> {
    if (typeof customFieldId === "string") {
      const fields = await this.getAll();

      for (const field of fields) {
        if (field.short_name === customFieldId) {
          if (field.id) {
            customFieldId = field.id;
          }
        }
      }
    }

    return this._invoke<CustomFieldReturn>(
      `/admin/custom_field/${customFieldId}`,
      "get"
    );
  }

  /**
   * Create a new custom field
   * @description Creates a new custom field with the specified properties.
   * @param customField The custom field to create.
   * @returns The newly created custom field.
   */
  public create(customField: CustomField): Promise<CustomFieldReturn> {
    return this._invoke<CustomFieldReturn>(
      "/admin/custom_fields",
      "post",
      customField
    );
  }

  /**
   * Update an existing custom field
   * @description Updates the specified custom field with the specified properties.
   * @param customFieldId The ID of the custom field to update.
   * @param customField The custom field to update.
   * @returns The updated custom field.
   */
  public update(
    customFieldId: number,
    customField: CustomField
  ): Promise<unknown> {
    return this._invoke<unknown>(
      `/admin/custom_field/${customFieldId}`,
      "put",
      customField
    );
  }

  /**
   * Delete a custom field
   * @description Deletes the specified custom field.
   * @param customFieldId The ID of the custom field to delete.
   */
  public delete(customFieldId: number): Promise<unknown> {
    return this._invoke<unknown>(
      `/admin/custom_field/${customFieldId}`,
      "delete"
    );
  }
}
