import { Controller, Delete, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    findAll(): string {
        return 'This action return all users'
    }

    @Delete('/by-id')
    findById(): string {
        return 'This action will delete all users'
    }
}
