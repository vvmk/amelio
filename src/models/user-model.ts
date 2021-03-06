import { AccountModel } from './account-model';

export class UserModel {

	avatar: string = 'assets/imgs/anon.png';
	companies: string[] = [];
	userObserver: any;
	accounts: AccountModel[] = [];

	constructor(public name: string, public email: string) {

	}

	addCompany(company: string): void {
		this.companies.push(company);
	}

	addAccount(account: AccountModel): void {
		 this.accounts.push(account);
	}
}