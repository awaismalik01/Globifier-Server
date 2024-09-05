import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  const mockUserService = {
    findAll: jest.fn().mockResolvedValue([
      {
        _id: '66c10027a04cd553e7b1da86',
        firstname: 'Test 2',
        lastname: 'Admin',
        email: 'test2@gmail.com',
        password:
          '$2a$10$aOXFaXDvjecAPc4Lbw1AKOoJqO7TCHhR.d.YRH21hH.hbkI.Mq2SK',
        role: 'admin',
        createdAt: '2024-08-17T19:55:19.926Z',
        updatedAt: '2024-08-17T19:55:19.926Z',
        __v: 0,
      },
    ]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: mockUserService }],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call getAllUsers', async () => {
    const result = await controller.getAllUsers();
    expect(result).toEqual([
      {
        _id: '66c10027a04cd553e7b1da86',
        firstname: 'Test 2',
        lastname: 'Admin',
        email: 'test2@gmail.com',
        password:
          '$2a$10$aOXFaXDvjecAPc4Lbw1AKOoJqO7TCHhR.d.YRH21hH.hbkI.Mq2SK',
        role: 'admin',
        createdAt: '2024-08-17T19:55:19.926Z',
        updatedAt: '2024-08-17T19:55:19.926Z',
        __v: 0,
      },
      ,
    ]);
    expect(userService.findAll).toHaveBeenCalled();
  });
});
