import reducer from './reducer'
import { random } from 'faker'
import * as actionTypes from './actions';

describe('Reducers: When the type is', () => {
  describe('"ADD_INGREDIENT"', () => {
    const ingredientName = random.word()
    const ingredientCount = random.number({ min: 1 }) 
    const state = { ingredients: {
      [ingredientName]: ingredientCount
    }} 
    const action = { type: actionTypes.ADD_INGREDIENT, ingredientName } 
    let result

    beforeAll(() => {
      result = reducer(state, action)
    })

    it(`updates the ${ingredientName} state by adding 1`, () => {
      const expectedCount = ingredientCount + 1 
      expect(result).toEqual({ ingredients: { [ingredientName]: expectedCount } })
    })
  })

  describe('"REMOVE_INGREDIENT"', () => {
    const ingredientName = random.word()
    const ingredientCount = random.number({ min: 1 })
    const state = { ingredients: {
      [ingredientName]: ingredientCount
    }} 
    const action = { type: actionTypes.REMOVE_INGREDIENT, ingredientName } 
    let result

    beforeAll(() => {
      result = reducer(state, action)
    })

    it(`updates the ${ingredientName} state by minus 1`, () => {
      const expectedCount = ingredientCount - 1 
      expect(result).toEqual({ ingredients: { [ingredientName]: expectedCount } })
    })
  })
})