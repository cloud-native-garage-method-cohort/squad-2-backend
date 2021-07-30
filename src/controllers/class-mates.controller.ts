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
import {Classmates} from '../models';
import {ClassmatesRepository} from '../repositories';

export class ClassMatesController {
  constructor(
    @repository(ClassmatesRepository)
    public classmatesRepository : ClassmatesRepository,
  ) {}

  @post('/classmates')
  @response(200, {
    description: 'Classmates model instance',
    content: {'application/json': {schema: getModelSchemaRef(Classmates)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classmates, {
            title: 'NewClassmates',
            exclude: ['id'],
          }),
        },
      },
    })
    classmates: Omit<Classmates, 'id'>,
  ): Promise<Classmates> {
    return this.classmatesRepository.create(classmates);
  }

  @get('/classmates/count')
  @response(200, {
    description: 'Classmates model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Classmates) where?: Where<Classmates>,
  ): Promise<Count> {
    return this.classmatesRepository.count(where);
  }

  @get('/classmates')
  @response(200, {
    description: 'Array of Classmates model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Classmates, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Classmates) filter?: Filter<Classmates>,
  ): Promise<Classmates[]> {
    return this.classmatesRepository.find(filter);
  }

  @patch('/classmates')
  @response(200, {
    description: 'Classmates PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classmates, {partial: true}),
        },
      },
    })
    classmates: Classmates,
    @param.where(Classmates) where?: Where<Classmates>,
  ): Promise<Count> {
    return this.classmatesRepository.updateAll(classmates, where);
  }

  @get('/classmates/{id}')
  @response(200, {
    description: 'Classmates model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Classmates, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Classmates, {exclude: 'where'}) filter?: FilterExcludingWhere<Classmates>
  ): Promise<Classmates> {
    return this.classmatesRepository.findById(id, filter);
  }

  @patch('/classmates/{id}')
  @response(204, {
    description: 'Classmates PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classmates, {partial: true}),
        },
      },
    })
    classmates: Classmates,
  ): Promise<void> {
    await this.classmatesRepository.updateById(id, classmates);
  }

  @put('/classmates/{id}')
  @response(204, {
    description: 'Classmates PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() classmates: Classmates,
  ): Promise<void> {
    await this.classmatesRepository.replaceById(id, classmates);
  }

  @del('/classmates/{id}')
  @response(204, {
    description: 'Classmates DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.classmatesRepository.deleteById(id);
  }
}
