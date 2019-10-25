import { shallowMount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'
import Child from '../Child'

describe('TestComponent.vue', () => {
  test('renders an TestComponent', () => {
    const testProps = { testProp: 10 }
    const wrapper = shallowMount(TestComponent, {
      propsData: testProps
    })
    const child = wrapper.find(Child)
    console.log(child.props())
    expect(child.props().testProp).toBe(testProps.testProp)
  })

  test('check that contains a link with url https://google.com', () => {
    const testProps = { testProp: 10, url: 'https://google.com' }
    const wrapper = shallowMount(TestComponent, {
      propsData: testProps
    })
    const a = wrapper.find('a')
    expect(a.attributes().href).toBe(testProps.url)
  })
  test('check the p tag has a style = color:red', () => {
    const wrapper = shallowMount(TestComponent)
    const p = wrapper.find('p')
    expect(p.element.style.color).toBe('red')
  })
})
