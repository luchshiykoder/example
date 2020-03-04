

export interface Employee {    
    firstName:string,
    lastName:string,
    email:string,
    status:string,
    password:string,
    confirmPassword:string,
    
    userRolesEntity:[{
        userRolesId:number
        type:string,
        status:string
        
    }]

}