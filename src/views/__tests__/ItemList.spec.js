import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList'
import Item from '../../components/Item'

describe('ItemList.vue', () => {
  test('renders an Item for each item in window.items', () => {
    window.items = [{}, {}, {}]
    const wrapper = shallowMount(ItemList)
    expect(wrapper.findAll(Item)).toHaveLength(window.items.length)
  })
})
