import React from 'react'

declare namespace contributesForm {
  /**
   * A raw contributes source
   */
  type IRawSource = {
    /**
     * The source name
     */
    name: string,
    
    /**
     * The source contents
     */
    [key: string]: any
  }

  /**
   * The component props
   */
  interface IProps {
    /**
     * The sources from which to load contributes data
     */
    sources: string[],

    /**
     * Optional raw sources
     */
    rawSources?: IRawSource[],

    /**
     * Optional existing data
     */
    data?: any,

    /**
     * Optional submission callback
     */
    complete?: (data: any) => void
  }

  /**
   * A form component that deals with contributes sources
   */
  export class ContributesForm extends React.Component<IProps, {schema: any}> {}
}

export = contributesForm.ContributesForm