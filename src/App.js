import './App.css';
import { SingletonImplementation } from './components/design_patterns/singleton/singleton.ts';
import { FactoryMethodImplementation } from './components/design_patterns/factory_method/factory_method.ts';
import { AdapterImplementation } from './components/design_patterns/adapter/adapter.ts';
import { MediatorImplementation } from './components/design_patterns/mediator/mediator.ts';

function App() {
  return (
    <div className="App">
      <h1>Open Console to see implementations</h1>
      <SingletonImplementation />
      <FactoryMethodImplementation />
      <AdapterImplementation />
      <MediatorImplementation />
    </div>
  );
}

export default App;
