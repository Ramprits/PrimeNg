export class CreationForCustomerDto implements Customer {
	companyName: string;
	contactName: string;
	contactTitle: string;
	address: string;
	city: string;
	region: string;
	postalCode: string;
	country: string;
	phone: string;
	fax: string;
	constructor(
		companyName = '',
		contactName = '',
		contactTitle = '',
		address = '',
		city = '',
		region = '',
		postalCode = '',
		country = '',
		phone = '',
		fax = '', ) {
	}

}
export class Customer {
	companyName: string;
	contactName: string;
	contactTitle: string;
	address: string;
	city: string;
	region: string;
	postalCode: string;
	country: string;
	phone: string;
	fax: string;
}