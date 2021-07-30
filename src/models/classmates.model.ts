import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'classmates'}}
})
export class Classmates extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'firstname', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'lastname', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  lastname: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'role', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  role?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'city', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  city?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'country', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  country?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'email', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  email?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Classmates>) {
    super(data);
  }
}

export interface ClassmatesRelations {
  // describe navigational properties here
}

export type ClassmatesWithRelations = Classmates & ClassmatesRelations;
