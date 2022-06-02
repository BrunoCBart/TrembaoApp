import { getFoodTypes } from '../api/trembao'

export const FOOD_OPTIONS_QUANTITY = {
  Arroz: 1,
  Feijão: 1,
  Misturas: 2,
  Guarnições: 3,
  Saladas: 2,
  Bebidas: 9999
}

export const getAllFoodTypes = async () => {
  const foodTypes = await getFoodTypes()
    .catch(error => console.log(error))

  return foodTypes
}

const hasReachedFoodLimit = (checkedAmount, type) => checkedAmount >= FOOD_OPTIONS_QUANTITY[type]

export const getCheckedAndUncheckedFoods = (foodOptionCheckboxes) => {
  const checkedOptions = foodOptionCheckboxes.filter(({ checked }) => checked)
  const uncheckedOptions = foodOptionCheckboxes.filter(({ checked }) => !checked)
  return { checkedOptions, uncheckedOptions }
}

export const disableOrEnableOptions = (checkedAmount, type, uncheckedOptions) => {
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
