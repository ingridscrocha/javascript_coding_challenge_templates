const itemName = "Ipad Charger"
const unitCost= 50
const currentStock= 20
const reorderLevel= 15
const targetStock= 60
const weeklyDemand= 10
const supplierLeadTimeWeeks= 2 

const weeksofCover= weeklyDemand > 0 ? currentStock/weeklyDemand : Infinity
const stockDeficit= Math.max(0,targetStock-currentStock)
const reorderNow= (currentStock<= reorderLevel) || (weeksofCover< supplierLeadTimeWeeks)
const reorderQuantity= reorderNow ? Math.ceil(stockDeficit): 0 
const estimatedReorderCost= reorderQuantity * unitCost 

console.log("Item:", itemName)
console.log("Unit Cost: $", unitCost.toFixed(2))
console.log("Current Stock", currentStock)
console.log("Target Stock", targetStock)
console.log("Weekly Demand", weeklyDemand)
console.log("Supplier Lead Time (weeks)", supplierLeadTimeWeeks)

console.log("Weeks of Cover", Number.isFinite(weeksofCover) ? weeksofCover.toFixed(2): "Infinity")
console.log("Reorder Now?", reorderNow)
console.log("Reorder Quantity:", reorderQuantity)
console.log("Estimated Reorder Cost: $", estimatedReorderCost.toFixed(2))

