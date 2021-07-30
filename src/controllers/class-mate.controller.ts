import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ClassMateModel} from '../models';
import {ClassMateModelRepository} from '../repositories';

export class ClassMateController {
  constructor(
    @repository(ClassMateModelRepository)
    public classMateModelRepository : ClassMateModelRepository,
  ) {}

  @post('/classmates')
  @response(200, {
    description: 'ClassMateModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(ClassMateModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClassMateModel, {
            title: 'NewClassMateModel',
            exclude: ['id'],
          }),
        },
      },
    })
    classMateModel: Omit<ClassMateModel, 'id'>,
  ): Promise<ClassMateModel> {
    return this.classMateModelRepository.create(classMateModel);
  }

  @get('/classmates/count')
  @response(200, {
    description: 'ClassMateModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ClassMateModel) where?: Where<ClassMateModel>,
  ): Promise<Count> {
    return this.classMateModelRepository.count(where);
  }

  @get('/classmates')
  @response(200, {
    description: 'Array of ClassMateModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ClassMateModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ClassMateModel) filter?: Filter<ClassMateModel>,
  ): Promise<ClassMateModel[]> {
    return this.classMateModelRepository.find(filter);
  }

  @patch('/classmates')
  @response(200, {
    description: 'ClassMateModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClassMateModel, {partial: true}),
        },
      },
    })
    classMateModel: ClassMateModel,
    @param.where(ClassMateModel) where?: Where<ClassMateModel>,
  ): Promise<Count> {
    return this.classMateModelRepository.updateAll(classMateModel, where);
  }

  @get('/classmates/{id}')
  @response(200, {
    description: 'ClassMateModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ClassMateModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ClassMateModel, {exclude: 'where'}) filter?: FilterExcludingWhere<ClassMateModel>
  ): Promise<ClassMateModel> {
    return this.classMateModelRepository.findById(id, filter);
  }

  @patch('/classmates/{id}')
  @response(204, {
    description: 'ClassMateModel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClassMateModel, {partial: true}),
        },
      },
    })
    classMateModel: ClassMateModel,
  ): Promise<void> {
    await this.classMateModelRepository.updateById(id, classMateModel);
  }

  @put('/classmates/{id}')
  @response(204, {
    description: 'ClassMateModel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() classMateModel: ClassMateModel,
  ): Promise<void> {
    await this.classMateModelRepository.replaceById(id, classMateModel);
  }

  @del('/classmates/{id}')
  @response(204, {
    description: 'ClassMateModel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.classMateModelRepository.deleteById(id);
  }
}
