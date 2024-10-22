import { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native';
import { initializeDb } from '../src/services/db';

import { Home } from '../src/screen/home';

export default function Index() {

  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    const setup = async () => {
      await initializeDb();
      setDbInitialized(true);
    }

    setup()
  }, [])


  if(!dbInitialized){
    return(
      <SafeAreaView>
        <Text>Carregando...</Text>
      </SafeAreaView>
    )
  }
  return (
    <Home/>
  );
}
