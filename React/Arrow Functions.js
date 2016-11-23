//Arrow function examples:

//change:
this.interval = setInterval(function(){
    if (this.state.text === stopper) {
        this.setState({
            text: this.originalText
        })
    } else {
        this.setState({
            text: this.state.text + '.'
        })
    }
}.bind(this), this.props.speed);

//to:

this.interval = setInterval(() => {
        if (this.state.text === stopper) {
this.setState({
    text: this.originalText
})
} else {
    this.setState({
        text: this.state.text + '.'
    })
}
}, this.props.speed);


const doThing = (thing)

//Change:
return repos.data.reduce(function(prev, current){
    return prev + current.stargazers_count
}, 0)

//to:
return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0)
