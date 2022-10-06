const React = require('react')

class New extends React.Component {
    render() {
        return (
            <>
            <h1>Create a New Veggie</h1>
            <a href="/veggies">Back to Veggies Home</a>
            <form method="POST" action="/veggies">
                <input type="text" name="name" placeholder="Name a Vegetable"></input><br />
                <input type="text" name="type" placeholder="Type of Vegetable"></input><br />
                <input type="checkbox" name="fav"></input><br />
                <input type="submit" value="Submit Vegetable"></input><br />
            </form>
            </>
        )
    }
}

module.exports= New