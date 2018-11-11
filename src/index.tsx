import React from 'react'
import SForm from 'react-jsonschema-form'
import contributes from '@overlayed-app/contributes'

type IRawSource = {
  name: string,
  [key: string]: any
}

interface IProps {
  sources: string[],
  rawSources?: IRawSource[],
  data?: any,
  complete?: (data: any) => void
}

export default class ContributesForm extends React.Component<IProps, {schema: any}> {
  static defaultProps = {
    rawSources: []
  } as Partial<IProps>

  constructor (props: IProps) {
    super(props)

    this.state = {
      schema: this.getUpdatedSchema()
    }
  }

  public componentDidUpdate () {
    this.setState({
      schema: this.getUpdatedSchema()
    })
  }

  public render () {
    return (
      <SForm
        schema={this.state.schema}
        formData={this.props.data}
        onSubmit={this.props.complete}>
          {this.props.children}
      </SForm>
    )
  }

  private getUpdatedSchema () {
    const s = this.props.sources.map(source => contributes.from(source))

    const d = {
      type: 'object',
      properties: {} as {[key: string]: any}
    }

    s.forEach(e => {
      d.properties[e.name] = {
        type: 'object',
        properties: {} as {[key: string]: any}
      }
      e.data.forEach(dd => d.properties[e.name].properties[dd.name] = { ...dd })
    })

    const rs = this.props.rawSources as IRawSource[]

    rs.forEach(r => {
      d.properties[r.name] = r
    })

    return d
  }
}
