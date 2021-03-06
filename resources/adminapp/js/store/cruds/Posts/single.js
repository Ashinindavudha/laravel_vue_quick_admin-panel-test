function initialState() {
  return {
    entry: {
      id: null,
      post_category_id: null,
      post_title: '',
      description: '',
      slug: '',
      post_image: [],
      user_id: null,
      publish: true,
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      post_category: [],
      user: []
    },
    loading: false
  }
}

const route = 'posts'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          // commit('setEntry', response.data.data)
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setPostCategory({ commit }, value) {
    commit('setPostCategory', value)
  },
  setPostTitle({ commit }, value) {
    commit('setPostTitle', value)
  },
  setDescription({ commit }, value) {
    commit('setDescription', value)
  },
  setSlug({ commit }, value) {
    commit('setSlug', value)
  },
  insertPostImageFile({ commit }, file) {
    commit('insertPostImageFile', file)
  },
  removePostImageFile({ commit }, file) {
    commit('removePostImageFile', file)
  },
  setUser({ commit }, value) {
    commit('setUser', value)
  },
  setPublish({ commit }, value) {
    commit('setPublish', value)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchCreateData({ commit }) {
    axios.get(`${route}/create`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
      commit('setLists', response.data.meta)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setPostCategory(state, value) {
    state.entry.post_category_id = value
  },
  setPostTitle(state, value) {
    state.entry.post_title = value
  },
  setDescription(state, value) {
    state.entry.description = value
  },
  setSlug(state, value) {
    state.entry.slug = value
  },
  insertPostImageFile(state, file) {
    state.entry.post_image.push(file)
  },
  removePostImageFile(state, file) {
    state.entry.post_image = state.entry.post_image.filter(item => {
      return item.id !== file.id
    })
  },
  setUser(state, value) {
    state.entry.user_id = value
  },
  setPublish(state, value) {
    state.entry.publish = value
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setLists(state, lists) {
    state.lists = lists
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
