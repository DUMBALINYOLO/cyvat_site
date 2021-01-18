const localhost = "http://127.0.0.1:8000"

const apiURL = "/api"

const endpoint = `${localhost}${apiURL}`

//basedata
export const productstatuschoicesURL = `${endpoint}/basedata/product-status-choices/`
export const haulierstatuschoicesURL = `${endpoint}/basedata/haulier-status-choices/`
export const customerstatuschoicesURL = `${endpoint}/basedata/customer-status-choices/`
export const transactiontypechoicesURL = `${endpoint}/basedata/transaction-type-choices/`
export const transactionstatuschoicesURL = `${endpoint}/basedata/transaction-status-choices/`
export const vehicletypechoicesURL = `${endpoint}/basedata/vehicle-type-choices/`
export const scaleinputmethodsURL = `${endpoint}/basedata/scaleinput-methods/`
export const serialportschoicesURL = `${endpoint}/basedata/serialports-choices/`




//people


//setup
export const configurationsURL = `${endpoint}/setup/headoffice-companies-view/`
export const headofficeURL = `${endpoint}/setup/head-config-view/`

//PRODUCTS URL
export const productsURL = `${endpoint}/products/products/`
export const productcategoriesURL = `${endpoint}/products/product-categories/`

//CUSTOMERS
export const customersURL = `${endpoint}/customers/customers/`

//HAULIERS
export const hauliersURL = `${endpoint}/hauliers/hauliers/`


//TRANSACTIONS
export const loadingpointsURL = `${endpoint}/transactions/loading-points/`
export const adminarchivedtransactionsURL = `${endpoint}/transactions/admin-archived-transactions/`
export const admincancelledtransactionsURL = `${endpoint}/transactions/admin-cancelled-transactions/`
export const admintwotiertransactionsURL = `${endpoint}/transactions/admin-twotier-transactions/`
export const adminonetiertransactionsURL = `${endpoint}/transactions/admin-onetier-transactions/`

// VEHICLES
export const vehiclesURL = `${endpoint}/vehicles/vehicles/`


// SCALES
export const scalesURL = `${endpoint}/scale/scales/`











