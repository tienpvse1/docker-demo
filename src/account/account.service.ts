import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  // constructor to inject account repository
  constructor(
    @InjectRepository(AccountRepository)
    private readonly accountRepository: AccountRepository,
  ) {}

  create(createAccountDto: Account) {
    return this.accountRepository.createAccount(createAccountDto);
  }

  findAll() {
    return this.accountRepository.getAllAccounts();
  }

  findOne(id: number) {
    return this.accountRepository.getAccountById(id);
  }

  update(id: number, updateAccountDto: Partial<Account>) {
    return this.accountRepository.updateAccount(id, updateAccountDto);
  }

  remove(id: number) {
    return this.accountRepository.softDeleteAccount(id);
  }
}
