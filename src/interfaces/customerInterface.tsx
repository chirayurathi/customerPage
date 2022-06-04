export interface CustomerInterface{
    name:string,
    email:string,
    phone:number
}

export interface ExistingCustomerInterface extends CustomerInterface{
    id:string
}

export interface CustomerListInterface{
    [key:string]:CustomerInterface
}