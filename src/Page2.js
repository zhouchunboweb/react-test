import React from 'react'

class Page2 extends React.Component {
  render () {
    let mystyle={
          width:'200px',
          height:'80px',
          backgroundColor:'yellow',
          fontSize:'24px',
          textAlign:'center'
        }
    return(
      <div>
        <div style={mystyle}>This is Page2!</div>
        <div>真是美好的一天啊</div>
      </div>
    )
  }
}

export default Page2