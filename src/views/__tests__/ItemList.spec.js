import { shallowMount } from '@vue/test-utils'

import ItemList from '../ItemList'
import Item from '../../components/Item'

describe('ItemList.vue', () => {
  test('renders an Item with data for each item in window.items', () => {
    window.items = [{}, {}, {}]
    const $bar = {
      start: jest.fn(),
      finish: () => {}
    }
    const wrapper = shallowMount(ItemList, { mocks: { $bar } })
    const items = wrapper.findAll(Item)
    expect(items).toHaveLength(window.items.length)
    items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(window.items[i])
    })
  })
  test('calls $bar start on load', () => {
    const $bar = {
      start: jest.fn(),
      finish: () => {}
    }
    shallowMount(ItemList, { mocks: { $bar } })
    expect($bar.start).toHaveBeenCalledTimes(1)
  })
})
