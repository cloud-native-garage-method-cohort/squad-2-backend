import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ClassMateModel, ClassMateModelRelations} from '../models';

export class ClassMateModelRepository extends DefaultCrudRepository<
  ClassMateModel,
  typeof ClassMateModel.prototype.id,
  ClassMateModelRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ClassMateModel, dataSource);
  }
}
