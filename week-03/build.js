// Console based project
class Expense {
    constructor(title,amount,category,date){
        this.title = title
        this.amount = amount
        this.category = category
        this.date= date
    }
}
class User {
    constructor(Nam){
        this.Nam = Nam
        this.expenses = []
    }
    addExpense(Expense){
        this.expenses.push(Expense)
        
    }
    totalKharcha() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0)
}
categoryReport(){
    
return this.expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount
    return report  
}, {})            
    }
}

    class PremiumUser extends User{
        constructor(Nam,monthlyBudget){
            super(Nam)
            this.monthlyBudget = monthlyBudget
        }
        BudgetAlert(){
            if(this.totalKharcha() > this.monthlyBudget){
                console.log("Budget cross ho gaya!")
            }else{
                console.log("Budget safe hai")
            }
        }
    }

const user = new PremiumUser("Himanshu", 5000)

user.addExpense(new Expense("Biryani", 250, "Food", "2024-01-01"))
user.addExpense(new Expense("Uber", 150, "Travel", "2024-01-02"))
user.addExpense(new Expense("Pizza", 400, "Food", "2024-01-03"))
user.addExpense(new Expense("Books", 800, "Education", "2024-01-04"))

console.log(user.totalKharcha())    
console.log(user.categoryReport())  
user.BudgetAlert()
