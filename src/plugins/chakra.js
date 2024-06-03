import { ChakraUIVuePlugin, extendTheme } from '@chakra-ui/vue-next'

const theme = extendTheme({})

export default {
  install(app) {
    app.use(ChakraUIVuePlugin, { extendTheme: theme })
  }
}
