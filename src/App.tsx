import { Routes, Route } from "react-router-dom";
import BasketProvider from "./context/BasketProvider";
import Layout from './components/Layout/Layout';
import Shop from './components/Shop/Shop';
import Basket from './components/Basket/Basket';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
    return (
        <BasketProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Shop />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BasketProvider>
    );
}

export default App;
