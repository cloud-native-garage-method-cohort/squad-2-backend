import {Entity, model, property} from '@loopback/repository';

@model()
export class ClassMateModel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;


  constructor(data?: Partial<ClassMateModel>) {
    super(data);
  }
}

export interface ClassMateModelRelations {
  // describe navigational properties here
}

export type ClassMateModelWithRelations = ClassMateModel & ClassMateModelRelations;
