import React from 'react'
import renderer from 'react-test-renderer'
import ContributesForm from '../src/index'

describe('contributes-form', () => {
  it('should render', () => {
    const tree = renderer
      .create(<ContributesForm sources={[`${__dirname}/fixture.package.json`]}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should combine', () => {
    const tree = renderer
      .create(<ContributesForm sources={[
        `${__dirname}/fixture.package.json`,
        `${__dirname}/fixture2.package.json`
      ]}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should support custom buttons', () => {
    const tree = renderer
      .create(<ContributesForm sources={[`${__dirname}/fixture.package.json`]}>
        <div>
          <button className='custom' type='submit'>Submit</button>
          <button className='custom' type='button'>Cancel</button>
        </div>
      </ContributesForm>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should support rawSources', () => {
    const tree = renderer
      .create(<ContributesForm sources={[`${__dirname}/fixture.package.json`]} rawSources={[{
        name: 'rawSource',
        type: 'object',
        properties: {
          myProp: {
            type: 'string',
            default: 'test'
          }
        }
      }]}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
