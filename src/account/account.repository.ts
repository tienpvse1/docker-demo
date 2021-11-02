// create typeorm repository for account

import { EntityRepository, Repository, UpdateResult } from 'typeorm';
import { Account } from './entities/account.entity';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
  createAccount(account: Account): Promise<Account> {
    return this.save(account);
  }
  getAccountById(id: number): Promise<Account> {
    return this.findOne(id);
  }
  getAllAccounts(): Promise<Account[]> {
    return this.find();
  }
  softDeleteAccount(id: number): Promise<UpdateResult> {
    return this.softDelete(id);
  }
  updateAccount(id: number, account: Partial<Account>): Promise<UpdateResult> {
    return this.update(id, account);
  }
}
