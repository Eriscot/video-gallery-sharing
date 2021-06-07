import { Injectable } from '@nestjs/common';
import { ShareLinkRepository } from '../../../domain/share-link/share-link.repository';
import { Share } from '../../../domain/share-link/share-link.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ShareOrmEntity } from './share-link.orm-entity';
import { Repository } from 'typeorm';

@Injectable()
export class DatabaseShareRepository implements ShareLinkRepository {
  constructor(
    @InjectRepository(ShareOrmEntity)
    private readonly shareOrmRepository: Repository<ShareOrmEntity>,
  ) {}

  find(query: any): Promise<Share> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<Share[]> {
    return Promise.resolve([]);
  }

  findOne(query: any): Promise<Share> {
    return Promise.resolve(undefined);
  }

  save(entity: Share): Promise<Share> {
    return Promise.resolve(undefined);
  }
}
