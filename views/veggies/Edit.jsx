const React = require('react')

class Edit extends React.Component {
    render(){
        const {name, _id, type, fav} = this.props.veggie
        return(
            <>
            <h1>Edit a New Veggie</h1>
            <a href="/veggies">Back to Veggies Home</a>
            <form method="POST" action="/veggies">
                name: <input type="text" name="name" defaultValue={name}></input><br />
                type: <input type="text" name="type" defaultValue={type}></input><br />
                Is a Fav:  <input type="checkbox" name="fav" defaultChecked={fav}></input><br />
                <input type="submit" value="Edit Vegetable"></input><br />
            </form>
            </>
        )
    }
}

module.exports = Edit