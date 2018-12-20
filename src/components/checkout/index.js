import React from 'react'

// const amount = 2500

const Checkout = class extends React.Component {
  state = {
    disabled: false,
    buttonText: 'But Now',
    paymentMessage: ''
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: 'Buy Now' })
  }

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      key: 'pk_test_nw35NQYjAfQB8RNo33S0jzPP',
      closed: () => {
        this.resetButton()
      },
    })
  }

  openStripeCheckout(event) {
    event.preventDefault()
    const product = this.props.product
    const productSize = this.props.size
    const amount = this.props.cost
    const description = productSize
    this.setState({ disabled: true, buttonText: "WAITING..." })
    this.stripeHandler.open({
      name: product,
      amount: parseInt(amount, 10),
      description: productSize,
      billingAddress: true,
      zipCode: true,
      token: token => {
        fetch(`https://dpqx9f5e40.execute-api.us-east-1.amazonaws.com/dev/checkout`, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            token,
            amount,
            product,
            description,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then(res => {
            console.log("Transaction processed successfully")
            this.resetButton()
            this.setState({ paymentMessage: "Payment Successful!" })
            return res
          })
          .catch(error => {
            console.error("Error:", error)
            this.setState({ paymentMessage: "Payment Failed" })
          })
      },
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={event => this.openStripeCheckout(event)}
          disabled={this.state.disabled}
        >
          {this.state.buttonText}
        </button>
        {this.props.cost}
        {this.state.paymentMessage}
      </div>
    )
  }
}

export default Checkout
