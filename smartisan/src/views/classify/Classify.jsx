import React from 'react'

import './Classify.styl'
import data from './ClassifyData'
import Head from '../../components/head/Head'
import ClassifyBox from '../../components/classifyBox/ClassifyBox'

class Classify extends React.Component{
  state = {

  }

  render () {
    return (
      <div className='Classify'>
        <Head leftMenu={true} centerText={'分类'} rightSearch={true} />
        <ClassifyBox data={data.ClassifyPhone} right={true}/>
        <ClassifyBox data={data.ClassifyParts} right={false} width={2} class_name={'threeItem'}/>
        <ClassifyBox data={data.ClassifyClothing} right={false} width={2} class_name={'threeItem'}/>
        <ClassifyBox data={data.ClassifyBreathe} right={true}class_name={'twoItem'}/>
      </div>
    )
  }
}
export default Classify