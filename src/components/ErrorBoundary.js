import React, { Component } from 'react';

class ErrorBoundary extends Component {
   state = {
      hasError: false
   }

   componentDidCatch(error, info) {
      this.setState({hasError: true})
   }

   render() {
      return this.state.hasError
      ?
      <h1>Ooops! that is not good</h1>
      :
      this.props.children
   }
}

export default ErrorBoundary;