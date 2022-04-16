import Persistence from 'vuex-persist'

export default ({ store }) => {
  new Persistence({
  /* your options */
  }).plugin(store)
}