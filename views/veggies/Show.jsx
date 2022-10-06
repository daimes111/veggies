const React = require('react')

class Show extends React.Component {
    render () {
        const {name, type, fav, _id} = this.props.veggie
        const vegName = name[0].toUpperCase() + name.substring(1)
        return (
            <>
                <h1> {vegName} Show Page</h1>
                <a href="/veggies">Back to Veggies Home</a><br />
                <a href={`/veggies/${_id}/edit`}>Edit the {vegName}</a>
                <p>{vegName} is a {type} and {fav? 'is a favorite of mine': 'is not a favorite of mine'}</p>
            </>
        )
    }
}

module.exports = Show