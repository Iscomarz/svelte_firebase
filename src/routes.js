import Login from "./Login.svelte"
import Crud from "./Crud.svelte"
import Error404 from "./Error404.svelte"

const routes= {
    '/': Login,
    '/Crud': Crud,
    '*':Error404
}

export default routes;


