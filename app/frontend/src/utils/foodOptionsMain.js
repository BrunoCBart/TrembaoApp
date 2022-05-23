const FOOD_OPTIONS_QUANTITY = {
  Arroz: 1,
  Feijão: 1,
  Misturas: 2,
  Guarnições: 3,
  Saladas: 2,
  Bebidas: 9999
}

const hasReachedFoodLimit = (checkedAmount, type) => checkedAmount >= FOOD_OPTIONS_QUANTITY[type]

const getCheckedAndUncheckedFoods = (foodOptionCheckboxes) => {
  const checkedOptions = foodOptionCheckboxes.filter(({ checked }) => checked)
  const uncheckedOptions = foodOptionCheckboxes.filter(({ checked }) => !checked)
  return { checkedOptions, uncheckedOptions }
}

const disableOrEnableOptions = (checkedAmount, type, uncheckedOptions) => {
  if (hasReachedFoodLimit(checkedAmount, type)) {
    uncheckedOptions.forEach((foodOptionCheckbox) => {
      foodOptionCheckbox.disabled = true
    })
  } else {
    uncheckedOptions.forEach((foodOptionCheckbox) => {
      foodOptionCheckbox.disabled = false
    })
  }
}

export { hasReachedFoodLimit, getCheckedAndUncheckedFoods, disableOrEnableOptions }
