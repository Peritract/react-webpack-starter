import React from 'react';

import ResourceCard from './components/ResourceCard';

const App = () => {
    return <>
        <h1>App</h1>
        <ResourceCard name="pokemon" description="You can hear the screams..." startingValue={0}/>
        <ResourceCard name="woodland animals" description={"You can hear the yelping..."} startingValue={3}/>
        <ResourceCard name="money" description="Clink." startingValue={45}/>
    </>
};

export default App;