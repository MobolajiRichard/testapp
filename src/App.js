import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Search from "./Component/Search";
import {QueryClientProvider, QueryClient} from  '@tanstack/react-query'


const queryClient = new QueryClient()


function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
         {/* <Navbar/>
      <Header/> */}
      <Search/>
      </QueryClientProvider>  
    </div>
  );
}

export default App;
