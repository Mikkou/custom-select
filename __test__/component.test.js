import { mount } from '@vue/test-utils'
import CustomSelect from '../components/lib/customSelect'

const items = [
  { text: 'test1', value: 'val1' },
  { text: 'test2', value: 'val2' },
  { text: 'test3', value: 'val3' },
  { text: 'test4', value: 'val4' },
  { text: 'test5', value: 'val5' },
  { text: 'test6', value: 'val6' },
  { text: 'test7', value: 'val7' },
  { text: 'test8', value: 'val8' },
  { text: 'test9', value: 'val9' }
]

const value = {}

describe('CustomSelect', () => {
  test('check html', () => {
    const wrapper = mount(CustomSelect, {
      propsData: { items, value }
    })
    wrapper.find('.m-select__title').trigger('click')
    expect(wrapper.element).toMatchSnapshot()
  })
})
