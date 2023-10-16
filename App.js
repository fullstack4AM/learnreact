        //const heading = React.createElement("h1",{id:"head",xyz:"abc"},"Hello World from Reaaaact! ");
        //console.log(heading);

        const parent = React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child"},
        [ 
                React.createElement("h1",{},"This is H1"),
                React.createElement("h2",{},"This is H2")]
        ),
        React.createElement("div",{id:"child2"},
        [ 
                React.createElement("h1",{},"This is H1"),
                React.createElement("h2",{},"This is H2")]
        )]
        
        )


        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);