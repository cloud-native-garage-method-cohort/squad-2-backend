import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PsqlDataSource} from '../datasources';
import {Classmates, ClassmatesRelations} from '../models';

export class ClassmatesRepository extends DefaultCrudRepository<
  Classmates,
  typeof Classmates.prototype.id,
  ClassmatesRelations
> {
  constructor(
    @inject('datasources.psql') dataSource: PsqlDataSource,
  ) {
    super(Classmates, dataSource);
  }
}
