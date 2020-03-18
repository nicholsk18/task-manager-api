const calculateTip = (total, tipPer) => {
    const tip = total * tipPer
    return total + tip
}

module.exports = {
    calculateTip
}