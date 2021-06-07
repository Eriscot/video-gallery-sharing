import { Injectable } from '@nestjs/common';
import { VideoRepository } from '../../../domain/video/video.repository';
import { Video } from '../../../domain/video/video.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoOrmEntity } from './video.orm-entity';
import { Repository } from 'typeorm';

@Injectable()
export class DatabaseVideoRepository implements VideoRepository {
  constructor(
    @InjectRepository(VideoOrmEntity)
    private readonly videoOrmEntityRepository: Repository<VideoOrmEntity>,
  ) {}

  find(query: any): Promise<Video> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<Video[]> {
    return Promise.resolve([]);
  }

  findOne(query: any): Promise<Video> {
    return Promise.resolve(undefined);
  }

  save(entity: Video): Promise<Video> {
    return Promise.resolve(undefined);
  }
}
