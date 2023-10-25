import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { paginateResponse } from '../http/base.response';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private readonly chatRepository: Repository<Chat>,
  ) {}
  create(createChatDto: CreateChatDto) {
    return this.chatRepository.insert(createChatDto);
  }

  async findAll(query: any) {
    const keyword = query.keyword || '';
    const take = parseInt(query.size) || 10;
    const page = parseInt(query.page) || 1;
    const skip = (page - 1) * take;

    const data = await this.chatRepository.findAndCount({
      where: { name: Like('%' + keyword + '%') },
      order: { name: 'DESC' },
      take: take,
      skip: skip,
    });

    return paginateResponse(data, page, take);
  }

  async findOne(id: number) {
    const data = await this.chatRepository.findOneBy({ id });
    if (!data) {
      throw new BadRequestException(`id ${id} Not Found`);
    } else {
      return data;
    }
  }

  async update(id: number, updateChatDto: UpdateChatDto) {
    const data = await this.chatRepository.update(id, updateChatDto);
    if (data.affected === 0) {
      throw new BadRequestException(`id ${id} Not Found`);
    }
  }

  async remove(id: number) {
    const data = await this.chatRepository.delete(id);
    if (data.affected === 0) {
      throw new BadRequestException(`id ${id} Not Found`);
    }
  }
}
