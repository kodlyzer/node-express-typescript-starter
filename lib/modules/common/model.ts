export interface ModificationNote {
  modifiedOn: Date;
  modifiedBy: String;
  modificationNote: String;
}

export const ModificationNote = {
  modifiedOn: Date,
  modifiedBy: String,
  modificationNote: String
}

export enum ResponseStatusCodes {
  Success = 200,
  BadRequest = 400,
  InternalServerError = 500
}